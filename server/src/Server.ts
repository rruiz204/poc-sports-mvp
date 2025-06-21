import express from "express";
import { Bootstrap } from "./Bootstrap";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

interface GraphQLContext {};




const app = express();

const bootstrap = new Bootstrap(app);

bootstrap.addRouting();

app.use(express.json());



const apollo = new ApolloServer<GraphQLContext>({ typeDefs, resolvers });
await apollo.start();

app.use("/graphql", expressMiddleware(apollo));

app.listen(3000, () => {
  console.log("the server is running!!!");
});