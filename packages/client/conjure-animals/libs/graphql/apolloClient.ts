import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://www.dnd5eapi.co/graphql/2014',
    cache: new InMemoryCache(),
});

export default client;
