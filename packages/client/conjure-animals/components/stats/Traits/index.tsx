import React from 'react';
import {AnimalStats} from '../../stats/stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsTraits({stats}: Props) {
    return null;
    // return Array.isArray(stats.trait) ? (
    //     <div className="flex flex-wrap">
    //         {stats.trait.map((trait) => (
    //             <p className="mt-2" key={trait.name}>
    //                 <span className="font-bold mr-1 inline-block">{trait.name}</span>
    //                 {trait.entries.map((entry) => parseReferences(entry))}
    //             </p>
    //         ))}
    //     </div>
    // ) : null;
}
