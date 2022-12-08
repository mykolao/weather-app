import { useForecastItem } from 'components/ForecastChart/hooks';
import { renderHook } from 'test-utils';
import { ForecastData } from 'types';

const forecast: ForecastData = {
  date: 'sometime',
  timestamp: 0,
  temp: 0,
  feels_like: 0,
  humidity: 0,
  pressure: 0,
};

const forecasts: ForecastData[] = [
  { ...forecast, temp: -2 },
  { ...forecast, temp: 0 },
  { ...forecast, temp: 2 },
];

const base = -2;
const height = 30;
const range = 4;

describe('ForecastChart/useForecastItem', () => {
  it('Should upscale item correctly', () => {
    const scale = 2;

    const expectedOutputs = [
      [240, 0],
      [240, 105],
      [240, 210],
    ];

    const results = forecasts.map((f) => {
      const { result } = renderHook(() =>
        useForecastItem(f, base, height, range, scale),
      );

      const {
        current: { wrapperHeight, itemOffset },
      } = result;

      return [wrapperHeight, itemOffset];
    });

    results.forEach((result, i) => {
      expect(result).toEqual(expectedOutputs[i]);
    });
  });

  it('Should downscale item correctly', () => {
    const scale = 0.5;

    const expectedOutputs = [
      [60, 0],
      [60, 15],
      [60, 30],
    ];

    const results = forecasts.map((f) => {
      const { result } = renderHook(() =>
        useForecastItem(f, base, height, range, scale),
      );

      const {
        current: { wrapperHeight, itemOffset },
      } = result;

      return [wrapperHeight, itemOffset];
    });

    results.forEach((result, i) => {
      expect(result).toEqual(expectedOutputs[i]);
    });
  });

  it('Should calculate correct wrapperHeight and itemOffset values', () => {
    const expectedOutputs = [
      [120, 0],
      [120, 45],
      [120, 90],
    ];

    const results = forecasts.map((f) => {
      const { result } = renderHook(() =>
        useForecastItem(f, base, height, range),
      );

      const {
        current: { wrapperHeight, itemOffset },
      } = result;

      return [wrapperHeight, itemOffset];
    });

    results.forEach((result, i) => {
      expect(result).toEqual(expectedOutputs[i]);
    });
  });
});
