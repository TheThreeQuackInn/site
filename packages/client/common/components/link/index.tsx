import React from 'react';

type Props = {
    target: HTMLAnchorElement['target'];
    href?: HTMLAnchorElement['href'];
    label: string;
    title?: HTMLAnchorElement['title'];
    rel?: HTMLAnchorElement['rel'];
};

export const linkClassName =
    'transition-colors duration-300 mx-1 font-medium hover:underline link focus:outline-black dark:focus:outline-white';

export default function Link({target, href, title, rel, label}: Props) {
    return (
        <a className={linkClassName} href={href} target={target} title={title} rel={rel}>
            {label}
        </a>
    );
}
