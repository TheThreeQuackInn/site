import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

function determineAlignment(alignments: string) {
    return alignments;
}

export default function StatsAlignment({stats}: Props) {
    return stats.alignment ? <span className="italic lowercase">, {determineAlignment(stats.alignment)}</span> : null;
}
