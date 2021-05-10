import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {ApolloError, useQuery} from '@apollo/client';
import slugify from '../../libs/slugify';
import {Monsters, Monsters_monsters as Beast} from '../../libs/graphql/types';
import {AnimalStats} from '../../components/stats/stats';
import GET_BEASTS_QUERY from './getBeastsQuery';

export const ConjureAnimalsContext = createContext<Context>({
    animals: {},
    getAnimalData: (_: string) => undefined,
    formData: [],
    isLoading: true,
    error: undefined,
});

type Props = {
    children: ReactNode;
};

type Context = {
    animals: {[key: string]: AnimalStats};
    getAnimalData: (animalName: string) => AnimalStats | undefined;
    formData: Array<{label: string; value: string}>;
    isLoading: boolean;
    error: ApolloError | undefined;
};

type FormData = Array<{label: string; value: string}>;

function initAnimalData(beasts: ReadonlyArray<Beast>) {
    const animals: {[key: string]: AnimalStats} = {};
    const formData: FormData = [];

    if (Array.isArray(beasts)) {
        beasts
            .filter((beast: Beast) => beast.cr && beast.cr < 2)
            .forEach((beast: Beast) => {
                const beastName = slugify(beast.name || '');
                animals[beastName] = {
                    ...beast,
                    speed: normalizeSpeed(beast),
                    proficiencies: normalizeProficiencies(beast),
                };

                formData.push({
                    label: beast.name || '',
                    value: beastName,
                });
            });
    }

    return {animals, formData};
}

function normalizeSpeed(beast: Beast) {
    const speed = [];
    for (const [key, value] of Object.entries(beast.speed || {})) {
        if (key !== '__typename' && value) speed.push(`${key}: ${value}`);
    }
    return speed;
}

function normalizeProficiencies(beast: Beast) {
    if (!beast.proficiencies?.length) return [];

    return beast.proficiencies
        .map((proficiency) => {
            if (!proficiency?.proficiency?.name || !proficiency?.value) return '';
            const name = proficiency.proficiency.name.split('Skill: ') || '';
            const skillName = name.length ? name[name.length - 1] : '';
            return `${skillName} +${proficiency.value}`;
        })
        .filter(Boolean);
}

export function ConjureAnimalsProvider({children}: Props) {
    const {data, loading, error} = useQuery<Monsters>(GET_BEASTS_QUERY);
    const [animals, setAnimals] = useState<{[key: string]: AnimalStats}>({});
    const [formData, setFormData] = useState<FormData>([]);

    function getAnimalData(animalName: string) {
        return animals[animalName];
    }

    useEffect(() => {
        if (!loading) {
            const {animals, formData} = initAnimalData(data?.monsters || []);
            if (formData.length) {
                setAnimals(animals);
                setFormData(formData);
            }
        }
    }, [loading, data, error]);

    return (
        <ConjureAnimalsContext.Provider value={{animals, getAnimalData, formData, isLoading: loading, error}}>
            {children}
        </ConjureAnimalsContext.Provider>
    );
}
