import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: `http://localhost:4444/graphql`,
  cache: new InMemoryCache(),
  credentials: "include",
  
});
