import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsSize({stats}: Props) {
    return stats.size && stats.type ? (
        <span className="italic">
            <span className="text-sm lowercase inline-flex ml-1">
                ({stats.size} {stats.type})
            </span>
        </span>
    ) : null;
}
