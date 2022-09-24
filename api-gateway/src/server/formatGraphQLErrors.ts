import { GraphQLError } from "graphql";

export const formatGraphQLErrors = (error: GraphQLError) => {
  // @ts-ignore-next-line (neither GraphQLError (here) nor ApolloError (on startServer file) interfaces satisfy conditions for typings)
  const errorDetails = error.originalError?.response.body;

  try {

    if (errorDetails) return JSON.parse(errorDetails);

  } catch (e) {}
  
  if (error.message) return error.message;

  return null;
};
