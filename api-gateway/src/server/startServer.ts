import express from 'express'
import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { formatGraphQLErrors } from './formatGraphQLErrors';
import { resolvers } from '../graphql/resolvers';
import { schema } from '../graphql/schema';
import { injectSession } from '../middlewares/injectSession';

export const startServer = async () =>{
   const apolloServer = new ApolloServer({
      context: a => a,
      formatError: formatGraphQLErrors,
      resolvers,
      typeDefs: schema
   })

   const app = express();

   const PORT = 4444;

   app.use(cookieParser())

   app.use(express.json());
   
   app.use(cors({
      origin: (origin, cb) => cb(null, true), 
      credentials: true,
      // allowedHeaders: "*"

   }))
   
   app.use(injectSession);

   await apolloServer.start()
   apolloServer.applyMiddleware({app, cors: false, path: "/graphql"})

   app.listen(PORT, ()=>{
      console.log(`Api Gateway is running on port ${PORT}!`)
   })
}