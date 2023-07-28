import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

import { authGoogle } from "../../../lib/user"

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await authGoogle({
        email: user.email || '',
        name: user.name || '',
        profile_img: user.image || ''
      })
      return true
    },
    redirect: async ({ url, baseUrl }) => {
      return baseUrl + "/features"
    },
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      session.user = token.user;
      session.user.userName = token.user.email
      if (session.user.image.includes("=s96-c")) {
        session.user.image = session.user.image.split("=s96-c")[0]
      }
      return session;
    }
  },
}


export default NextAuth(authOptions);

