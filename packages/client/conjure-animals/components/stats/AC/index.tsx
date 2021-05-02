import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsAC({stats}: Props) {
    return stats.ac ? (
        <p>
            <span className="font-bold mr-1">Armor Class</span>
            {stats.ac}
        </p>
    ) : null;
}
