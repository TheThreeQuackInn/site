import React, {Fragment} from 'react';
import ThemeSwitch from '../themeSwitch';
import navStructure from './structure.json';
import TopLevelNavItem from './TopLevel';

export default function Nav() {
    return (
        <Fragment>
            <a
                className={
                    'skip-link dark:text-white text-black dark:bg-gray-500 bg-gray-100 p-2 dark:outline-white outline-black'
                }
                href="#main"
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
