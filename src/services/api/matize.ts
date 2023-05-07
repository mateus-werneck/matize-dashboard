import axios from 'axios';



export const matizeSSR = axios.create({
  baseURL: String(process.env.MATIZE_V2_URL)
});

export const matizeV2 = axios.create({
  baseURL: String(process.env.MATIZE_V2_URL)
});
