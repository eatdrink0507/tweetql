import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = gql`
  type Query {
    test: String
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`server at : ${url}`);
