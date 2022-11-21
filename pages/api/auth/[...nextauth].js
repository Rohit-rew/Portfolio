import { Db } from "mongodb";
import nextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import connectPromise from "../../../lib/mongodb";

export const authOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const client = await connectPromise;
        const db = client.db("portfolio");
        const user = await db.collection("admins").find({ email }).toArray();

        if (user.length === 0) {
          return null;
        } else if (user) {
          if (email == user[0].email && password == user[0].password) {
            return user;
          } else if (password !== user.password) {
            throw new Error("password do not match");
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/admin",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    },
  },
};

export default nextAuth(authOptions);
