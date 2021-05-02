import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsSize({stats}: Props) {
    return (
        <span className="italic">
            {stats.size} {stats.type}
        </span>
    );
}
