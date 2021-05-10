import React, {Fragment} from 'react';
import dynamic from 'next/dynamic';
import AppHead from '../../components/head';
import Container from '@threequackinn/client-common/components/container';

const ConjureAnimals = dynamic(() => import('@threequackinn/conjure-animals'));

export default function ConjureAnimalsPage() {
    return (
        <Fragment>
            <AppHead title="Conjure animals">
                <meta name="description" content="A tool to help druids manage the Conjure Animals spell" />
            </AppHead>
            <Container>
                <h1 className="sr-only">Conjure animals</h1>
                <ConjureAnimals />
            </Container>
        </Fragment>
    );
}
