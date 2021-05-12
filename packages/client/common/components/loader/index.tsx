import React from 'react';
import classNames from 'classnames';
import './loader.scss';

type Props = {
    className?: string;
};

export default function Loader({className}: Props) {
    return (
        <div className={classNames(className, 'loading')}>
            <p>Loading</p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
