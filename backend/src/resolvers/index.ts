import User from "../models/userModel";

const resolvers = {
  Query: {
    hello: () => "world",
    getUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error(
          "Une erreur s'est produite lors de la récupération des utilisateurs."
        );
      }
    },
    getUser: async (_: any, { id }: any) => {
      try {
        const users = await User.findById(id);
        return users;
      } catch (error) {
        throw new Error(
          "Une erreur s'est produite lors de la récupération des utilisateurs."
        );
      }
    },
  },
  Mutation: {
    // Exemple de résolveur pour créer un utilisateur
    createUser: async (_: any, { name, email, password }: any) => {
      try {
        const user = new User({
          name,
          email,
          password,
        });
        const newUser = await user.save();
        return newUser;
      } catch (error) {
        throw new Error(
          "Une erreur s'est produite lors de la création de l'utilisateur."
        );
      }
    },
  },
};
export default resolvers;
