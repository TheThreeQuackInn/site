import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import DropdownIcon from '@threequackinn/client-common/components/icons/Dropdown';
import classNames from 'classnames';
import SecondLevelNavItem from '../SecondLevel';

export type NavItem = {
    label: string;
    href: string;
    children: Array<NavItem>;
};

export default function TopLevelNavItem({label, href, children}: NavItem) {
    const {pathname} = useRouter();
    const isActive = href === pathname;

    return (
        <Link href={href}>
            <li
                className={classNames(
                    children.length && 'dropdown dark:hover:text-white',
                    isActive && 'active',
                    'text-black dark:text-white relative mr-2 inline-flex',
                )}
            >
                <a
                    href={href}
                    className="p-2 dark:focus:outline-white focus:outline-black"
                    onClick={(e) => href === '#' && e.preventDefault()}
                >
                    {label}
                    {children.length ? <DropdownIcon /> : null}
                </a>
                {children.length ? (
                    <ul className="dropdown-menu top-full left-0 w-full z-10 absolute hidden dark:bg-gray-700 bg-gray-50 text-gray-900 dark:text-white shadow-md">
                        {children.map((child) => (
                            <SecondLevelNavItem {...child} />
                        ))}
                    </ul>
                ) : null}
            </li>
        </Link>
    );
}
