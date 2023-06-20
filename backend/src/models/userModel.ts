import { Schema, Types } from "mongoose";
import mongoDB from "../service/mongoDB";

interface IUser {
  name: string;
  email: string;
  createdAt: Date;
  password: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
    // posts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Post",
    //   },
    // ],
  },
  {
    toJSON: {
      transform(_doc, ret) {
        delete ret.password;
      },
    },
  }
);

const User = mongoDB.mongo.model("user", UserSchema, "userBlog");
export default User;
