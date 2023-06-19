import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolvers/hello";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
import * as fs from "node:fs";

const typeDefs = fs
  .readFileSync(require.resolve("./type-defs.graphql"))
  .toString("utf-8");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// This final export is important!

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  // We will be using the Proxy V2 handler
  handlers.createAPIGatewayProxyEventV2RequestHandler()
);
