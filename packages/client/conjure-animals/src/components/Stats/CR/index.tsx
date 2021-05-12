import React from 'react';
import {AnimalStats} from '../stats';
import convertToFraction from './convertToFraction';

type Props = {
    stats: AnimalStats;
};

export default function StatsCR({stats}: Props) {
    return (
        <div className="flex">
            <span className="inline-block mr-2 font-bold">Challenge Rating</span>
            {convertToFraction(stats.cr)}
        </div>
    );
}
