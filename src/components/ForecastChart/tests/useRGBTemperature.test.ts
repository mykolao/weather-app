import { useRGBTemperature } from 'components/ForecastChart/hooks';
import { renderHook } from 'test-utils';

const cold = [25, 118, 210];
const neutral = [66, 66, 66];
const warm = [239, 108, 0];

describe('ForecastChart/useRGBTemperature', () => {
  it('Should return gradient temperature value', () => {
    const { result } = renderHook(() => useRGBTemperature(20));
    const [r, g, b] = result.current.RGBValues;

    expect(r).toBeGreaterThan(66);
    expect(r).toBeLessThan(239);

    expect(g).toBeGreaterThan(66);
    expect(g).toBeLessThan(108);

    expect(b).toBeLessThan(66);
  });

  it('Should return correctly formatted CSS color value', () => {
    const { result } = renderHook(() => useRGBTemperature(0));
    expect(result.current.CSSValue).toBe('rgb(66, 66, 66)');
  });

  it('Should return default colors', () => {
    const inputs = [-100, -40, 0, 40, +100];
    const expectedOutputs = [cold, cold, neutral, warm, warm];

    inputs.forEach((input, i) => {
      const { result } = renderHook(() => useRGBTemperature(input));

      const { RGBValues } = result.current;

      expect(RGBValues).toEqual(expectedOutputs[i]);
    });
  });
});
