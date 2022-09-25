import { gql } from "apollo-server-express";

export const schema = gql`
   scalar Date
   scalar ID

   type User {
      username: ID!
   }

   type UserSession {
      createdAt: Date!
      expiresAt: Date!
      # id: ID!
      user: User!
   }

   type Mutation {
      createUser(password: String!, username: String!): User!
      createUserSession(password: String!, username: String!): UserSession!
      deleteUserSession(me: Boolean!): Boolean!
   }

   type Query {
      userSession(me: Boolean!): UserSession
   }
`;