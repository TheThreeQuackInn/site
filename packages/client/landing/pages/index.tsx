import React, {Fragment} from 'react';
import AppHead from '../components/head';
import Hero from '../components/hero';

export default function HomePage() {
    return (
        <Fragment>
            <AppHead title="The Three Quack Inn" />
            <Hero />
            <div className="flex py-10 container mx-auto flex-col text-center">
                <h2 className="tracking-tight leading-10 font-extrabold dark:text-white text-gray-900 xs:text-4xl sm:leading-none md:text-4xl mb-4">
                    The Three Quack Inn
                </h2>
                <p className="sm:text-lg text-gray-900 dark:text-gray-300">
                    Welcome to the Three Quack Inn, an inn dedicated to adventurers and storytellers alike. Come sit by
                    the warm fires, eat until your belly is full and sleep like a king in ours beds. The Three Quack Inn
                    helps Gamemasters and players with tools to use in their games. Only a few tools are available right
                    now, but more features are on the list to be added.
                </p>
            </div>
        </Fragment>
    );
}
