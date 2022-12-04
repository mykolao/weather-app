import axios from 'axios';
import { CityInfo } from 'types';

const baseURL = process.env.GEO_BASE;
const appid = process.env.API_KEY;
const limit = '5';

const apiInstance = axios.create({
  baseURL,
  params: {
    appid,
    limit,
  },
});

const fetchCities = async (q: string) => {
  if (!q.length) return Promise.resolve([]);

  const endpoint = 'direct';
  const config = { params: { q } };

  const { data } = await apiInstance.get<CityInfo[]>(
    endpoint,
    config,
  );

  return data;
};

export const searchApi = { fetchCities };
