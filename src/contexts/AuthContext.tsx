'use client';
import { authenticate, login } from '@API/authentication/auth';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import React, { createContext, useContext, useEffect, useState } from 'react';

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

export type User = {
  matizeId: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  iat: number;
  exp: number;
};

interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: IAuthProvider) {
  const authCookie = 'matizeinternal.auth.token';
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    appendCookieData();
  }, []);

  async function appendCookieData() {
    const cookieStore = parseCookies();
    const token = cookieStore[authCookie];

    if (!token) return;

    const user = await login(token);
    setUser(user);
  }

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await authenticate({ email, password });
    const expires = user ? user.exp : Date.now();

    setCookie(undefined, authCookie, token, {
      expires: new Date(expires)
    });
    setUser(user);
  }

  async function signOut() {
    destroyCookie(undefined, authCookie);
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
