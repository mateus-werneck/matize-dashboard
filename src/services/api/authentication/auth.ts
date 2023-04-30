import { matizeAPI } from '@API/matize';
import { User } from '@Contexts/AuthContext';
import { basicToken, bearerToken } from '@Utils/String';
import jwt_decode from 'jwt-decode';

type AuthenticateData = {
  email: string;
  password: string;
};

export type UserAuthenticated = {
  token: string;
  user: User | null;
}

export async function authenticate({ email, password }: AuthenticateData): Promise<UserAuthenticated> {
  const response = await matizeAPI.post('/token', undefined, {
    headers: {
      Authorization: basicToken(email, password)
    }
  });

  const { access_token } = response.data;
  const user = jwt_decode(access_token) as User;

  const isAdmin = user?.isAdmin === true;

  return {
    token: isAdmin ? access_token : null,
    user: user ?? null
  };
}

export async function login(token: string) {
  const response = await matizeAPI.get('/user/profile', {
    headers: {
      Authorization: bearerToken(token)
    }
  });

  const user = response.data;

  if (!user) return null;

  return user as User;
}
