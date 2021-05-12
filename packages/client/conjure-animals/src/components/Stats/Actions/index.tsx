import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsActions({stats}: Props) {
    return Array.isArray(stats.actions) ? (
        <div className="flex flex-wrap">
            {stats.actions.map((action) => (
                <div className="mt-2" key={action.name}>
                    <span className="font-bold mr-1 inline-block">{action.name}</span>
                    <span>{action.desc}</span>
                </div>
            ))}
        </div>
    ) : null;
}
