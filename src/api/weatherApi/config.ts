import axios from 'axios';

const baseURL = process.env.WEATHER_BASE;
const appid = process.env.API_KEY;

const units = 'metric';

export const apiInstance = axios.create({
  baseURL,
  params: {
    units,
    appid,
  },
});
