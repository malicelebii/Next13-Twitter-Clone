import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        if (!email || !password) {
          throw new Error("Missing username or password");
        }
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        // if user doesn't exist or password doesn't match
        if (!user || !(await compare(password, user.password))) {
          throw new Error("Invalid username or password");
        }
       
        return {id:user.id,email,name:user.name,image:user.profileImgUrl};
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token}) {
      return token;
    },
    async session({ session, token }) {
      return { ...session ,token};
    },
  },
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
