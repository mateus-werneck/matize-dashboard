import { bearerToken } from '@Utils/String';
import axios from 'axios';
import { parseCookies } from 'nookies';

export const serverMatizeAPI = axios.create({
    baseURL: 'http://localhost:3333/'
  });

export const matizeAPI = axios.create({
  baseURL: 'http://localhost:3333/'
});

matizeAPI.interceptors.request.use(
  (config) => {
    const cookieStore = parseCookies();
    const token = cookieStore['matizeinternal.auth.token'];
    const route = config.url;
    if (token && route != '/token')
      config.headers.set('Authorization', bearerToken(token));
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

matizeAPI.interceptors.response.use(
  (onFulfilled) => {
    return Promise.resolve(onFulfilled);
  },
  (onRejected) => {
    return Promise.resolve(onRejected);
  }
);
