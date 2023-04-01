import axios from 'axios';

export const matizeAPI = axios.create({
  baseURL: 'http://localhost:3333/'
});

matizeAPI.interceptors.request.use((config) => {
  return config;
}, (error) => {
    return Promise.reject(error)
});
