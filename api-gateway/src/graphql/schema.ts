import { gql } from "apollo-server-express";

export const schema = gql`
   scalar Date
   
   type User {
      id: ID!
      username: String!
   }

   type UserSession {
      createdAt: Date!
      expiresAt: Date!
      id: ID!
      user: User!
   }

   type Query {
      userSession(me: Boolean!): UserSession
   }
`;