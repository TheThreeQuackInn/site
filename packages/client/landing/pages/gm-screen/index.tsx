import React, {Fragment} from 'react';
import {resetServerContext} from 'react-beautiful-dnd';
import dynamic from 'next/dynamic';
import AppHead from '../../components/head';

const GmScreen = dynamic(() => import('@threequackinn/gm-screen'));

export default function GmScreenPage() {
    return (
        <Fragment>
            <AppHead title="GM Screen">
                <meta
                    name="description"
                    content="A tool to help gamemaster manage their game by providing random generators, rules reference and other helpful tools"
                />
            </AppHead>
            <div className="container mx-auto">
                <GmScreen />
            </div>
        </Fragment>
    );
}

/**
 * Apparently this is needed, to avoid a client/server mismatch with react-beautiful-dnd.
 * @see https://github.com/atlassian/react-beautiful-dnd/issues/1617
 */
export const getServerSideProps = async () => {
    resetServerContext();
    return {props: {data: []}};
};
