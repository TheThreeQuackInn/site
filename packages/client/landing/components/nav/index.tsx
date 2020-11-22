import React, {Fragment} from 'react';
import ThemeSwitch from '../themeSwitch';
import NavItem from './Item';
import navStyles from './index.module.css';
import classNames from 'classnames';

const druidItems = [{label: 'Conjure Animals', href: '/conjure-animals'}];

export default function Nav() {
    return (
        <Fragment>
            <a
                className={classNames(
                    navStyles.skipLink,
                    'dark:text-white text-black dark:bg-gray-500 bg-white p-2 dark:outline-white outline-black',
                )}
                href="#main"
            >
                Skip to content
            </a>
            <nav className="flex items-center justify-between flex-wrap bg-white dark:bg-gray-800 py-3 shadow-md">
                <div className="container mx-auto flex justify-between">
                    <ul className="text-sm sm:flex-grow items-center">
                        <NavItem href="/" label="Home" />
                        <NavItem href="#" label="Druids" items={druidItems} />
                    </ul>
                    <ThemeSwitch />
                </div>
            </nav>
        </Fragment>
    );
}
