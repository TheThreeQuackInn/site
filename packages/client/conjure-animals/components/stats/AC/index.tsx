import React from 'react';
import {AnimalStats} from '../stats';

type Props = {
    stats: AnimalStats;
};

export default function StatsAC({stats}: Props) {
    return stats.armor_class?.length ? (
        <p>
            <span className="font-bold mr-1">Armor Class</span>
            {stats.armor_class
                .filter(Boolean)
                .map((ac) => `${ac?.value} ${ac?.type ? `(${ac.type})` : ''}`.trim())
                .join(' ')}
        </p>
    ) : null;
}
