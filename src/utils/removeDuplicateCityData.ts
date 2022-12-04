import { CityData } from 'api/city/types';

export const removeDuplicateCityData = (data: CityData[]) => {
  const uniqueData: CityData[] = [];

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
