import React from 'react';
import NavItem from './Item';

const druidItems = [{label: 'Conjure Animals', href: '/conjure-animals'}];

export default function Nav() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white py-3 shadow-md">
            <div className="container mx-auto">
                <ul className="text-sm sm:flex-grow">
                    <NavItem href="/" label="Home" />
                    <NavItem href="#" label="Druids" items={druidItems} />
                </ul>
            </div>
        </nav>
    );
}
