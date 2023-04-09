import { matizeAPI } from '@API/matize';
import { basicToken, bearerToken } from '@Utils/String';

type AuthenticateData = {
  email: string;
  password: string;
};

export async function authenticate({ email, password }: AuthenticateData) {
  const response = await matizeAPI.post('/auth/login', undefined, {
    headers: {
      Authorization: basicToken(email, password)
    }
  });

  const { access_token, user } = response.data;

  return {
    token: access_token,
    user: {
      name: user.firstName,
      email: user.email
    }
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

  return {
    name: user.firstName,
    email: user.email
  };
}
