import {ApolloProvider} from '@apollo/client';
import ConjureAnimalsApp from './Inner';
import {ConjureAnimalsProvider} from '../../providers/ConjureAnimals';
import client from '../../libs/graphql/apolloClient';
import '../../css/index.scss';

export default function ConjureAnimals() {
    return (
        <ApolloProvider client={client}>
            <ConjureAnimalsProvider>
                <div className="flex flex-1 flex-wrap items-center justify-center">
                    <div className="py-2 md:py-5 md:flex flex-wrap md:flex-no-wrap md:items-center justify-center">
                        <ConjureAnimalsApp />
                    </div>
                </div>
            </ConjureAnimalsProvider>
        </ApolloProvider>
    );
}
