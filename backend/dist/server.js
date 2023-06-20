import { ApolloServer } from "@apollo/server";
import { startServerAndCreateLambdaHandler, handlers, } from "@as-integrations/aws-lambda";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers";

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
console.log(resolvers);
// const resolvers = {
//   Query: {
//     hello: () => "world",
//   },
// };
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// This final export is important!
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
export const graphqlHandler = startServerAndCreateLambdaHandler(server, handlers.createAPIGatewayProxyEventV2RequestHandler());
