import React from 'react';
import loaderStyles from './loader.module.css';
import classNames from 'classnames';

type Props = {
    className?: string;
};

export default function Loader({className}: Props) {
    return (
        <div className={classNames(className, loaderStyles.loading)}>
            <p>Loading</p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}
