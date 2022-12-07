import { CityInfo } from 'types';

export const transformOptions = (options: CityInfo[]) => {
  return options.map(({ name, country }) => {
    const str = `${name}, ${country}`;
    return str;
  });
};
