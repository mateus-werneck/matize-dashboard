import { matizeV2 } from '@API/matize';
import { MatizeUser } from '@Types/user';
import { basicToken } from '@Utils/String';
import jwt_decode from 'jwt-decode';
import type { NextAuthOptions, User } from 'next-auth';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
import { cookies } from 'next/headers';

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt', maxAge: 86400 },
  providers: [
    Credentials({
      name: 'MatizeV2',
      credentials: {
        email: {
          label: 'Email',
          type: 'email'
        },
        password: {
          label: 'Senha',
          type: 'password'
        }
      },
      async authorize(credentials) {
        try {
          const response = await matizeV2.post('/token', undefined, {
            headers: {
              Authorization: basicToken(
                String(credentials?.email),
                String(credentials?.password)
              )
            }
          });

          const { access_token } = response.data;

          if (!access_token) {
            return null;
          }

          const user = jwt_decode(access_token) as MatizeUser;

          if (!user.isAdmin) {
            return null;
          }

          const cookieStore = cookies();
          cookieStore.set(process.env.MATIZE_COOKIE, access_token);

          return {
            email: user.email,
            name: user.fullName
          } as User;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async signIn({ user }) {
      if(!user) {
        return false;
      }
      return true;
    },
    async jwt({ token }) {
      return token;
    },
    async session({ session }) {
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
