import { matizeV2 } from '@API/matize';
import { MatizeUser } from '@Types/user';
import { basicToken } from '@Utils/String';
import jwt_decode from 'jwt-decode';
import { NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions, User } from 'next-auth';
import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
import { destroyCookie, setCookie } from 'nookies';

const nextAuthOptions = (req: NextApiRequest, res: NextApiResponse) => {
  return {
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

            setCookie(
              { res },
              String(process.env.NEXT_PUBLIC_MATIZE_COOKIE),
              access_token,
              {
                maxAge: 86400,
                path: '/',
                httpOnly: true
              }
            );

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
      signIn: '/login',
      signOut: '/login',
    },
    callbacks: {
      async signIn({ user }) {
        if (!user) {
          return false;
        }
        return true;
      },
      async signOut() {
        destroyCookie({ res }, String(process.env.MATIZE_COOKIE));
        return true;
      },
      async jwt({ token }) {
        return token;
      },
      async session({ session }) {
        return session;
      }
    },
    debug: String(process.env.NODE_ENV) === 'development'
  } as NextAuthOptions;
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};

export { handler as GET, handler as POST };
