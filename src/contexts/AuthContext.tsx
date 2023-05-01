'use client';
import { authenticate } from '@API/authentication/auth';
import { InvalidCredentialsError } from '@Errors/login/invalidCredentials';
import { User } from '@Types/user';
import { destroyCookie, setCookie } from 'nookies';
import React, { createContext, useContext, useState } from 'react';

type AuthContextProps = {
  user: User | null;
  hasSession: () => boolean;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => Promise<void>;
};

type SignInData = {
  email: string;
  password: string;
};

interface IAuthProvider {
  children: React.ReactNode;
  userAuthenticated: User | null;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children, userAuthenticated }: IAuthProvider) {
  const [user, setUser] = useState<User | null>(userAuthenticated);

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await authenticate({ email, password });

    if (!token) {
      throw new InvalidCredentialsError();
    }
    setCookie(undefined, String(process.env.NEXT_PUBLIC_AUTH_COOKIE), token, {
      maxAge: 86400
    });
    setUser(user);
  }

  async function signOut() {
    destroyCookie(undefined, String(process.env.NEXT_PUBLIC_AUTH_COOKIE));
    setUser(null);
  }

  function hasSession(): boolean {
    return !!user;
  }

  return (
    <AuthContext.Provider value={{ user, hasSession, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
