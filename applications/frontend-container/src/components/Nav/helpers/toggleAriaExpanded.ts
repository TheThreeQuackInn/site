import {KeyboardEvent} from 'react';

export default function toggleAriaExpanded(e: KeyboardEvent<HTMLAnchorElement>) {
    if (e.key === 'Enter' && e.currentTarget.parentElement) {
        /**
         * We're dealing with a legitimate link
         */
        if (!e.currentTarget.href.includes('#')) {
            const navElements = document.querySelectorAll('nav .open');
            navElements.forEach((el) => {
                el.setAttribute('aria-expanded', 'false');
                el.classList.remove('open');
            });
        } else {
            const ariaExpanded = e.currentTarget.parentElement.getAttribute('aria-expanded');
            if (!ariaExpanded) return;

            const isExpanded = JSON.parse(ariaExpanded);
            e.currentTarget.parentElement.setAttribute('aria-expanded', !isExpanded + '');
            e.currentTarget.parentElement.classList.toggle('open');
        }
    }
}
