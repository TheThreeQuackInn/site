import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsSkills({stats}: Props) {
    return stats.proficiencies.length ? (
        <div className="flex">
            <span className="font-bold inline-block mr-1">Skills</span>
            {stats.proficiencies.map((prof) => (
                <span className="inline-block mr-2" key={prof}>
                    {prof}
                </span>
            ))}
        </div>
    ) : null;
}
