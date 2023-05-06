import axios from 'axios';

export const matizeV2 = axios.create({
  baseURL: 'http://localhost:3333/'
});
