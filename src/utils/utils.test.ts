import { CityInfo, Geo } from 'types';
import { compareCities } from 'utils/compareCities';
import { compareGeos } from 'utils/compareGeos';
import { formatTemperature } from 'utils/formatTemperature';
import { getCityByQuery } from 'utils/getCityByQuery';
import { minMax } from 'utils/minMax';
import { removeDuplicateCityData } from 'utils/removeDuplicateCityData';
import { transformCityData } from 'utils/transformCityData';

describe('Utility Functions', () => {
  it('Should return city object by "[name], [country]" string query', () => {
    const c1: CityInfo = {
      lat: 1,
      lon: 1,
      name: 'name',
      country: 'country',
    };

    const c2: CityInfo = { ...c1, name: 'other' };
    const c3: CityInfo = { ...c1, country: 'other' };

    const cities = [c1, c2, c3];

    const queries = [
      'name, country',
      'other, country',
      'name, other',
      'name country',
      'wrongQuery',
    ];

    const expectedOutputs = [c1, c2, c3, null, null];

    queries.forEach((query, i) => {
      expect(getCityByQuery(cities, query)).toEqual(
        expectedOutputs[i],
      );
    });
  });

  // removeDuplicateCityData
  it('Should remove duplicate CityInfo objects', () => {
    const c1: CityInfo = {
      name: 'name',
      country: 'country',
      lat: 1,
      lon: 1,
    };

    const c2: CityInfo = { ...c1 };
    const c3: CityInfo = { ...c1, lat: 2 };
    const c4: CityInfo = { ...c1, lon: 2 };
    const c5: CityInfo = { ...c1, name: 'unique' };
    const c6: CityInfo = { ...c1, lat: 2, country: 'unique' };

    const inputData = [c1, c2, c3, c4, c5, c6];
    const expectedOutput = [c1, c6];

    expect(removeDuplicateCityData(inputData)).toEqual(
      expectedOutput,
    );
  });

  // transformCityData
  it('Should not contain extra data', () => {
    const city1: CityInfo = {
      lat: 1,
      lon: 1,
      name: 'name',
      country: 'country',
    };

    const city2 = {
      ...city1,
      extra: true,
    } as CityInfo;

    const testData = [
      [[city1], [city1]],
      [
        [city1, city2],
        [city1, city1],
      ],
    ];

    testData.forEach(([input, expected]) => {
      expect(transformCityData(input)).toEqual(expected);
    });
  });

  // formatTemperature
  it('Should correctly format temperature value', () => {
    const testData: [number, string][] = [
      [0, '0'],
      [-0, '0'],
      [-0.49, '0'],
      [-0.51, '-1'],
      [0.51, '+1'],
    ];

    testData.forEach(([input, expected]) => {
      expect(formatTemperature(input)).toBe(expected);
    });
  });

  // compareCities
  it('Should should return equality of 2 CityInfo objects', () => {
    const c1: CityInfo = {
      name: 'name',
      country: 'country',
      lat: 1,
      lon: 1,
    };

    const c2: CityInfo = {
      name: 'name',
      country: 'country',
      lat: 0,
      lon: 1,
    };

    const c3: CityInfo = {
      name: 'n@me',
      country: 'country',
      lat: 1,
      lon: 1,
    };

    const c4: CityInfo = {
      name: 'name',
      country: 'country 2',
      lat: 1,
      lon: 1,
    };

    expect(compareCities(c1, c1)).toBe(true);
    expect(compareCities(c1, c2)).toBe(true);
    expect(compareCities(c1, c3)).toBe(true);
    expect(compareCities(c1, c4)).toBe(true);
    expect(compareCities(c2, c3)).toBe(false);
  });

  // compareGeos
  it('Should should return equality of 2 Geo objects', () => {
    const geo1: Geo = { lat: 1, lon: 1 };
    const geo2: Geo = { lat: 1, lon: 1.01 };

    expect(compareGeos(geo1, geo1)).toBe(true);
    expect(compareGeos(geo1, geo2)).toBe(false);
  });

  // minMax
  it('Should return [min, max] values for given array', () => {
    const inputs = [
      [0, 0],
      [1, 0],
      [0, 1],
      [-1, 0],
      [-1, -2],
      [2, -2],
    ];

    const expectedOutputs = [
      [0, 0],
      [0, 1],
      [0, 1],
      [-1, 0],
      [-2, -1],
      [-2, 2],
    ];

    inputs.forEach((input, i) => {
      expect(minMax(input)).toEqual(expectedOutputs[i]);
    });
  });
});
