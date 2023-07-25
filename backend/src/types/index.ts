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
    getUsers: [User!]!
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
export default typeDefs;
