import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsAlignment({stats}: Props) {
    return stats.alignment ? <span className="italic lowercase">, {stats.alignment}</span> : null;
}
