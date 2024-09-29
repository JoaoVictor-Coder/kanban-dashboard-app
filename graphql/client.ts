// /graphql/client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://mocked-graphql-server.com/graphql', // URL de GraphQL simulada
  cache: new InMemoryCache(),
});

export default client;
