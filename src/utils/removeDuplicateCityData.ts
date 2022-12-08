import { CityInfo } from 'types';
import { compareCities } from 'utils/compareCities';

export const removeDuplicateCityData = (data: CityInfo[]) => {
  const uniqueData: CityInfo[] = [];

  data.forEach((city) => {
    if (
      !uniqueData.find((uniqueCity) =>
        compareCities(city, uniqueCity),
      )
    ) {
      uniqueData.push(city);
    }
  });

  return uniqueData;
};
