import { CityInfo } from 'types';

export const removeDuplicateCityData = (data: CityInfo[]) => {
  const uniqueData: CityInfo[] = [];

  data.forEach((entry) => {
    if (
      !uniqueData.find(
        ({ name, country }) =>
          name === entry.name && country === entry.country,
      )
    ) {
      uniqueData.push(entry);
    }
  });

  return uniqueData;
};
