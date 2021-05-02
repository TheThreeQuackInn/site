import {AnimalStats} from '../components/stats/stats';
import {AnimalData, InitAction} from './types';

export const MAX_CR = 2;

export function calculateMaxAnimals(animal: AnimalStats) {
    if (!animal || animal.cr === null) return 0;
    const maxAnimals = MAX_CR / animal.cr;
    if (animal.cr === 0 || maxAnimals > 8) return 8;
    return Math.ceil(maxAnimals);
}

export function initializeAnimals({animalName, num, animal}: InitAction) {
    if (!animal || !window) return {};
    const cr = animal.cr ? parseInt(animal.cr.toString(), 10) : 0;
    const maxAnimals = calculateMaxAnimals(animal);
    const params = new URLSearchParams(window.location.search);
    const amountParam = params.get('amount');
    const numAnimals = num || (amountParam && parseInt(amountParam, 10));
    if (!numAnimals) return {};

    const animals: AnimalData = {};

    for (let i = 0; i < numAnimals; i++) {
        const currentIndex = i + 1;
        if (currentIndex > maxAnimals || (cr === 0 && currentIndex > 8)) break;

        animals[`${animalName}_${i}`] = {
            name: animal.name || '',
            hp: animal.hp + '',
            roll: null,
            advantage: false,
            disadvantage: false,
        };
    }

    return animals;
}
