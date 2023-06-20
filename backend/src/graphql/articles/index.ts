export const types = `
  type Article {
    title: String!,
    id: ID!,
    content: String!,
    categoryId: String!,
    authorId: String!,
    createdAt: DateTime!,
    isPublished: Boolean!
  }0
  `;

export const queries = ``;

export const mutations = ``;

export const resolvers = {
  Query: {
    hello: () => "world",
  },
  Mutation: {
    createArticle: async (_: any, args: any, context: any) => {
      console.log("coucou");
    },
  },
};
