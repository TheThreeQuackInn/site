import React, {Fragment} from 'react';
import ThemeSwitch from '../ThemeSwitch';
import navStructure from './structure.json';
import TopLevelNavItem from './TopLevel';
import './nav.scss';

export default function Nav() {
    return (
        <Fragment>
            <a
                id="skip-link"
                href="#main"
                className={
                    'skip-link dark:text-white text-black dark:bg-gray-500 bg-gray-100 p-2 dark:outline-white outline-black'
                }
            >
                Skip to content
            </a>
            <nav className="main flex items-center justify-between flex-wrap bg-white dark:bg-gray-800 py-4 shadow-md">
                <div className="container mx-auto flex justify-between">
                    <ul className="text-sm sm:flex-grow items-center">
                        {navStructure.map((topLevel) => (
                            <TopLevelNavItem key={topLevel.label} {...topLevel} />
                        ))}
                    </ul>
                    <ThemeSwitch />
                </div>
            </nav>
        </Fragment>
    );
}
