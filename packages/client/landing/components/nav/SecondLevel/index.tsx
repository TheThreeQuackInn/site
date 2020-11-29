import React from 'react';
import Link from 'next/link';
import {NavItem} from '../TopLevel';

export default function SecondLevelNavItem({label, href, children}: NavItem) {
    return (
        <Link href={href}>
            <li key={label} className="relative hover:bg-gray-200 dark:hover:bg-gray-500">
                <a href={href} className="p-2 w-full block" onClick={(e) => href === '#' && e.preventDefault()}>
                    {label}
                </a>
                {children.length ? (
                    <ul className="sub-menu absolute min-w-max left-full top-0 hidden dark:bg-gray-700 bg-gray-50 shadow-md">
                        {children.map((child) => (
                            <Link href={child.href}>
                                <li
                                    key={child.label}
                                    className="w-full hover:bg-gray-200 dark:hover:bg-gray-500 relative"
                                >
                                    <a href={child.href} className="p-2  w-full block">
                                        {child.label}
                                    </a>
                                </li>
                            </Link>
                        ))}
                    </ul>
                ) : null}
            </li>
        </Link>
    );
}
