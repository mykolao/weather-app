import { Geo } from 'types';

export const compareGeos = (geo1: Geo, geo2: Geo) => {
  const areLatsEqual = geo1.lat === geo2.lat;
  const areLonsEqual = geo1.lon === geo2.lon;

  return areLatsEqual && areLonsEqual;
};
