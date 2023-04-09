'use client';
import { authenticate, login } from '@API/authentication/auth';
import Router from 'next/router';
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

type User = {
  email: string;
  name: string;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const authCookie = 'matizeinternal.auth.token';
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    appendCookieData();
  }, []);

  function hasSession(): boolean {
    return !!user;
  }

  async function appendCookieData() {
    const cookieStore = parseCookies();
    const token = cookieStore[authCookie]

    if (!token) return;

    const user = await login(token);
    setUser(user);
  }

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await authenticate({ email, password });

    setCookie(undefined, authCookie, token, {
      maxAge: 86400
    });
    setUser(user);
  }

  async function signOut() {
    destroyCookie(undefined, authCookie);
    setUser(null);
    Router.push('/login');
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
