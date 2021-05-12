import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsSpeed({stats}: Props) {
    return stats.speed.length ? (
        <p>
            <span className="font-bold mr-2">Speed</span>
            {stats.speed.map((speed) => (
                <span className="inline-block mr-2 capitalize" key={speed}>
                    {speed}
                </span>
            ))}
        </p>
    ) : null;
}
