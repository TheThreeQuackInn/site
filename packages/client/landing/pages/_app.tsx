import React from 'react';
import {AppProps} from 'next/app';
import Nav from '../components/nav';
import '../css/index.css';

/**
 * Not the prettiest solution, axe makes use of window variables, which cannot be handled by nextjs
 * So, in dev mode we dynamically import the module and start if window is available
 */
if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    const promises = [import('@axe-core/react'), import('react-dom')];
    Promise.all(promises).then((result) => {
        const axe: any = result[0]?.default;
        const ReactDOM = result[1]?.default;
        if (axe && ReactDOM) axe(React, ReactDOM, 1000, {}, {exclude: [['#__next-prerender-indicator']]});
    });
}

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <Nav />
            <main>
                <Component {...pageProps} />
            </main>
        </div>
    );
}
