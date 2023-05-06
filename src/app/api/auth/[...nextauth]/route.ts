import { serverMatizeAPI } from '@API/matize';
import { MatizeUser } from '@Types/user';
import { basicToken } from '@Utils/String';
import jwt_decode from 'jwt-decode';
import type { NextAuthOptions, User } from 'next-auth';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';

interface AuthenticatedUser extends User {
  access_token: string;
}

export const authOptions: NextAuthOptions = {
  session: {strategy: 'jwt', maxAge: 86400},
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
        const response = await serverMatizeAPI.post('/token', undefined, {
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

        return {
          email: user.email,
          name: user.fullName,
          access_token
        } as AuthenticatedUser;
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({token, user}) {
      return token;
    },
    async session({session, token}) {
      return session;
    }
  },
  debug: true
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
