import React, {ReactNode} from 'react';
import {Helmet} from 'react-helmet';

type Props = {
    title: string;
    children?: ReactNode;
};

export default function AppHead({title, children}: Props) {
    return (
        <Helmet>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            {children}
        </Helmet>
    );
}
