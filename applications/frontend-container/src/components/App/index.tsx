import React, {lazy, Suspense} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import ThemeProvider from '../providers/Theme';
import Nav from '../Nav';
import Loader from '@threequackinn/client-common/components/loader';

const history = createBrowserHistory();

const ConjureAnimalsApp = lazy(() => import('../../pages/ConjureAnimals'));

export default function App() {
    return (
        <ThemeProvider>
            <Router history={history}>
                <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
                    <Nav />
                    <main id="main">
                        <Suspense fallback={<Loader className="flex-1 text-center my-10" />}>
                            <Switch>
                                <Route path="/conjure-animals" exact={true}>
                                    <ConjureAnimalsApp />
                                </Route>
                            </Switch>
                        </Suspense>
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
}
