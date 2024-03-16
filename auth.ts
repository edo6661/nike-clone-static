import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getUserById } from "./services/user";
import { Role } from "@prisma/client";
import "next-auth/jwt";
import { getAccountByUserId } from "./services/account";
import { getTwoFactorByUserId } from "./services/twoFactor";
import { revalidateNextAuthSession } from "./lib/auth";

declare module "next-auth" {
  interface User {
    role: Role;
    isTwoFactorEnabled: boolean;
    isOauth: boolean;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    role?: Role;
    isTwoFactorEnabled: boolean;
    isOauth: boolean;
  }
}

export const {
  handlers: { GET, POST },
  // ! auth untuk mengakses current user / session
  auth,
  signIn,
  signOut,
  unstable_update,
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  // ! gabisa make strategy database karena pake prisma dan prisma ga support edge runtime
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id!);

      if (!existingUser?.emailVerified) return false;

      revalidateNextAuthSession(existingUser);

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email!;
        session.user.isOauth = token.isOauth;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
});
