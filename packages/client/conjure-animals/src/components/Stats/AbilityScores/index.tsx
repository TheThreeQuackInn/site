import React from 'react';
import {AnimalStats} from '../stats';
import AbilityScore from './Score';

type Props = {
    stats: AnimalStats;
};

export default function StatsAbilityScores({stats}: Props) {
    return (
        <div className="flex flex-wrap lg:flex-no-wrap">
            <AbilityScore type="strength" score={stats.strength} />
            <AbilityScore type="dexterity" score={stats.dexterity} />
            <AbilityScore type="constitution" score={stats.constitution} />
            <AbilityScore type="intelligence" score={stats.intelligence} />
            <AbilityScore type="wisdom" score={stats.wisdom} />
            <AbilityScore type="charisma" score={stats.charisma} />
        </div>
    );
}
