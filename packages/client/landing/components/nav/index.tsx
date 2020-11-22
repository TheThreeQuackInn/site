import React from 'react';
import ThemeSwitch from '../themeSwitch';
import NavItem from './Item';

const druidItems = [{label: 'Conjure Animals', href: '/conjure-animals'}];

export default function Nav() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white dark:bg-gray-800 py-3 shadow-md">
            <div className="container mx-auto flex justify-between">
                <ul className="text-sm sm:flex-grow items-center">
                    <NavItem href="/" label="Home" />
                    <NavItem href="#" label="Druids" items={druidItems} />
                </ul>
                <ThemeSwitch />
            </div>
        </nav>
    );
}
