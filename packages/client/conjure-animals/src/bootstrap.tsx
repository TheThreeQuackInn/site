import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from 'history';
import App from './components/App';

if (process.env.NODE_ENV === 'development') {
    const root = document.getElementById('_conjure-animals-dev-root');
    if (root) mount(root, {defaultHistory: createBrowserHistory()});
}

export function mount(el: HTMLElement, {onNavigate, defaultHistory, initialPath}: any) {
    const history =
        defaultHistory ||
        createMemoryHistory({
            initialEntries: [initialPath],
        });

    if (onNavigate) history.listen(onNavigate);

    ReactDOM.render(<App />, el);

    return {
        onParentNavigate: ({pathname: nextPathname}: any) => {
            const {pathname} = history.location;

            if (pathname !== nextPathname) history.push(nextPathname);
        },
    };
}
