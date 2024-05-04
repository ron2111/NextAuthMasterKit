import NextAuth, { type DefaultSession } from "next-auth";
import { UserRole } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole; // admin/user / or any other role defined in db schema
};
declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
