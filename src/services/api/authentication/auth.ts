import { matizeAPI } from '@API/matize';

type AuthenticateData = {
  email: string;
  password: string;
};

export async function authenticate(data: AuthenticateData) {
  const basicAuth = Buffer.from(`${data.email}:${data.password}`).toString(
    'base64'
  );

  const response = await matizeAPI.post('/auth/login', undefined, {
    headers: {
      Authorization: `Basic ${basicAuth}`
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
      Authorization: `Bearer ${token}`
    }
  });

  const user = response.data;

  return {
    name: user.firstName,
    email: user.email
  };
}
