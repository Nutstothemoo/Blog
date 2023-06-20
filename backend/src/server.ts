import { ApolloServer } from "@apollo/server";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
// import resolvers from "./resolvers/resolvers";
// import {typeDefs} from "./graphql/index";

const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Category {
    id: ID!
    name: String!
    description: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    category: Category!
    author: User!
    created_at: String!
  }

  type Query {
    hello: String
    users: [User!]!
    postsByCategory(categoryId: ID!): [Post!]!
    postsByAuthor(authorId: ID!): [Post!]!
  }

  type Mutation {
    createPost(
      title: String!
      content: String!
      categoryId: ID!
      authorId: ID!
    ): Post!
  }
`;
// console.log(resolvers);
const resolvers = {
  Query: {
    hello: () => "world",
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler()
);
