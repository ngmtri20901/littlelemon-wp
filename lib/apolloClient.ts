import { ApolloClient, InMemoryCache } from '@apollo/client';

// Create Apollo Client instance
const client = new ApolloClient({
  uri: 'https://lemon.software.mintrishere.com/graphql',  // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;
