import NextJSLink from 'next/link';
import React, {Fragment} from 'react';
import Container from '@threequackinn/client-common/components/container';
import Separator from '@threequackinn/client-common/components/seperator';
import AppHead from '../components/head';
import Hero from '../components/hero';
import {linkClassName} from '../../common/components/link';
import useTheme from '../hooks/theme';

export default function HomePage() {
    const {theme} = useTheme();

    return (
        <Fragment>
            <AppHead title="The Three Quack Inn" />
            <Hero />
            <Container className="pt-20 pb-10 flex-col text-center">
                <h2 className="tracking-tight leading-10 font-extrabold dark:text-white text-gray-900 text-2xl sm:leading-none md:text-4xl mb-4">
                    The Three Quack Inn
                </h2>
                <p className="text-md md:text-lg">
                    Welcome to the Three Quack Inn, an inn dedicated to adventurers and storytellers alike. Come sit by
                    the warm fires, eat until your belly is full and sleep like a king in ours beds. The Three Quack Inn
                    helps Gamemasters and players with tools to use in their games. Only a few tools are available right
                    now, but more features are on the list to be added.
                </p>
            </Container>
            <Separator className="w-2/12 md:w-1/12 mx-auto" />

            <div className="py-10">
                <Container className="flex-col md:flex-row">
                    <div className="text-center md:text-right md:pr-5 md:w-3/12">
                        <h3 className="tracking-tight leading-10 font-extrabold dark:text-white text-gray-900 text-2xl sm:leading-none md:text-4xl mb-4">
                            The goal
                        </h3>
                        <a href="https://github.com/TheThreeQuackInn/site" target="_blank" rel="noreferrer noopener">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32.6 31.8"
                                width="24"
                                height="24"
                                className="mx-auto mb-4 md:ml-auto md:mr-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                            >
                                <g>
                                    <path
                                        fill={theme === 'dark' ? '#fff' : '#191717'}
                                        fillRule="evenodd"
                                        d="M16.3 0A16.3 16.3 0 0011 31.8c.9.1 1.1-.4 1.1-.8v-2.8c-4.5 1-5.5-2.2-5.5-2.2A4.4 4.4 0 005 23.6c-1.4-1 .1-1 .1-1a3.4 3.4 0 012.5 1.7 3.5 3.5 0 004.8 1.3 3.5 3.5 0 011-2.1c-3.6-.4-7.4-1.8-7.4-8A6.3 6.3 0 017.5 11a6 6 0 01.2-4.3s1.4-.5 4.5 1.7a15.4 15.4 0 018.1 0c3.1-2.2 4.5-1.7 4.5-1.7A6 6 0 0125 11a6.3 6.3 0 011.7 4.3c0 6.3-3.8 7.7-7.5 8a3.9 3.9 0 011.1 3V31c0 .5.3 1 1.2.8A16.3 16.3 0 0016.3 0z"
                                    />
                                </g>
                            </svg>
                            <span className="sr-only">GitHub page</span>
                        </a>
                    </div>
                    <div className="flex-1 md:px-10">
                        <p className="mb-4">
                            The Three Quack Inn came to life after one of the online sessions playing Dungeons &amp;
                            Dragons where I am playing as a Goliath Druid. Druids are fun to play, but managing the
                            skills can sometimes be a bit tricky and can take the speed out of combat, especially the
                            Conjure Animals spell where several animals can be spawned and each have their own
                            initiative order and rolls. Thus the
                            <NextJSLink href="/conjure-animals" passHref={true}>
                                <a className={linkClassName}>Conjure Animals</a>
                            </NextJSLink>
                            helper was born.
                        </p>
                        <p className="mb-4">
                            But so much more can be created to help game masters and players enjoy their games a bit
                            more with easy to use tools. With that idea in mind, I created this website to try and
                            facilitate those tools. Coincidentally, my goal for some time has been to create a website
                            with new technologies and this seemed a perfect fit for learning those new technologies.
                        </p>
                        <p>
                            If you have got a good idea for a feature, feel free to join the
                            <a className={linkClassName} href="https://discord.gg/GzERnkMsqu" target="_blank">
                                Discord server (invite link)
                            </a>
                            or message me on
                            <a
                                className={linkClassName}
                                href="https://www.reddit.com/user/Screetop"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Reddit
                            </a>
                            . Another way is to contribute your time to make these tools a reality! If you happen to be
                            a developer or simply would like to take a look at the open issues / feature planning,
                            please go to the
                            <a
                                className={linkClassName}
                                href="https://github.com/TheThreeQuackInn/site/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Github page
                            </a>
                            . Together we can create awesome tools.
                        </p>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
}
