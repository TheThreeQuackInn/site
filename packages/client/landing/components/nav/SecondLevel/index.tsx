import React from 'react';
import Link from 'next/link';
import ChevronRight from '@threequackinn/client-common/components/icons/ChevronRight';
import {NavItem} from '../TopLevel';
import toggleAriaExpanded from '../helpers/toggleAriaExpanded';

export default function SecondLevelNavItem({label, href, children}: NavItem) {
    return (
        <Link href={href}>
            <li
                key={label}
                className="relative hover:bg-gray-200 dark:hover:bg-gray-500"
                aria-haspopup={Boolean(children.length)}
                aria-expanded="false"
            >
                <a
                    href={href}
                    className="p-2 w-full focus:outline-none relative flex items-center justify-between"
                    onClick={(e) => href === '#' && e.preventDefault()}
                    onKeyDown={children.length ? toggleAriaExpanded : undefined}
                >
                    {label}
                    {children.length ? <ChevronRight /> : null}
                </a>
                {children.length ? (
                    <ul className="sub-menu absolute min-w-max left-full top-0 hidden dark:bg-gray-700 bg-gray-50 shadow-md">
                        {children.map((child) => (
                            <Link href={child.href} key={child.label}>
                                <li
                                    key={child.label}
                                    className="w-full hover:bg-gray-200 dark:hover:bg-gray-500 relative"
                                >
                                    <a
                                        href={child.href}
                                        className="p-2 w-full focus:outline-none relative flex items-center justify-between"
                                        onKeyDown={toggleAriaExpanded}
                                    >
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
