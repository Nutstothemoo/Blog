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

const startServer = async () => {
  try {
    // Passing an ApolloServer instance to the `startStandaloneServer` function:
    //  1. creates an Express app
    //  2. installs your ApolloServer instance as middleware
    //  3. prepares your app to handle incoming requests
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
  } catch (err) {
    console.error("An error occurred while starting the server:", err);
  }
};

startServer();

// This final export is important!

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  // We will be using the Proxy V2 handler
  handlers.createAPIGatewayProxyEventV2RequestHandler()
);
function startStandaloneServer(
  server: ApolloServer<import("@apollo/server").BaseContext>,
  arg1: { listen: { port: number } }
): { url: any } | PromiseLike<{ url: any }> {
  throw new Error("Function not implemented.");
}
