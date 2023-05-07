import { matizeSSR, matizeV2 } from '@API/matize';
import { MatizeUser } from '@Types/user';
import { basicToken, bearerToken } from '@Utils/String';
import jwt_decode from 'jwt-decode';
import type { NextAuthOptions, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';

interface AuthenticatedUser extends User {
  access_token: string;
}
interface MatizeJWT extends JWT {
  access_token: string;
}

export const nextAuthOptions: NextAuthOptions = {
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
          const response = await matizeSSR.post('/token', undefined, {
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

          matizeV2.defaults.headers.common['Authorization'] = bearerToken(access_token);

          return {
            email: user.email,
            name: user.fullName,
            access_token
          } as AuthenticatedUser;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
    signOut: '/login'
  },
  callbacks: {
    async signIn({ user }) {
      if (!user) {
        return false;
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as AuthenticatedUser;
        token = Object.assign({}, token, { access_token: customUser.access_token });
      }

      return token as MatizeJWT;
    },
    async session({ session, token }) {
      if (session) {
        const customToken = token as MatizeJWT;
        session = Object.assign({}, session, {
          access_token: customToken.access_token
        });
      }
      return session;
    }
  },
  debug: String(process.env.NODE_ENV) === 'development'
} as NextAuthOptions;

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
