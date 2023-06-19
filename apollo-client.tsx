import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "https://example.com/graphql", // Remplacez par votre URL GraphQL
	cache: new InMemoryCache(),
});