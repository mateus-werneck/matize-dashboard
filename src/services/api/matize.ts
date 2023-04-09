import axios from 'axios';
import { parseCookies } from 'nookies';

export const matizeAPI = axios.create({
  baseURL: 'http://localhost:3333/'
});

matizeAPI.interceptors.request.use(
  (config) => {
    const cookieStore = parseCookies();
    const token = cookieStore['matizeinternal.auth.token']
    if (token) config.headers.set('Authorization', `Bearer ${token}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
