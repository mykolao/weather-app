import { CityData } from 'api/city/types';

export const cityDataToString = ({ name, country }: CityData) =>
  `${name}, ${country}`;
