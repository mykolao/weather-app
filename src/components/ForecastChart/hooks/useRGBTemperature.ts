// Transforms array of RGB values to CSS color string
export const RGBToCss = ([r, g, b]: number[]) =>
  `rgb(${r}, ${g}, ${b})`;

// Calculates gradient value for single RGB value

const getColorGradientValue = (
  from: number,
  to: number,
  value: number,
  resolution: number,
) => {
  if (from === to) return to;

  const absValue = Math.abs(value);
  const sign = from < to ? 1 : -1;

  // number of possible values
  const range = from > to ? from - to : to - from;

  // fraction for a single value
  const dt = Math.round(range / resolution) * absValue;

  const res = sign > 0 ? from + dt : from - dt;

  return res;
};

const getRGBGradientValue = (
  from: number[],
  to: number[],
  value: number,
  resolution: number,
) => {
  const R = getColorGradientValue(from[0], to[0], value, resolution);
  const G = getColorGradientValue(from[1], to[1], value, resolution);
  const B = getColorGradientValue(from[2], to[2], value, resolution);

  return [R, G, B];
};

// Calculate RGB value for given temperature value
// limits: -40 +40

export const useRGBTemperature = (temp: number) => {
  const resolution = 80; // total number of shades
  const halvedResolution = resolution >> 1;

  const max = halvedResolution; //  max temp value
  const min = -halvedResolution; // min temp value

  const cold = [25, 118, 210]; //  rgb of #1976d2
  const neutral = [66, 66, 66]; // rgb of #424242
  const warm = [239, 108, 0]; //   rgb of #ef6c00

  // limit check
  if (temp === 0) return RGBToCss(neutral);
  if (temp >= max) return RGBToCss(warm);
  if (temp <= min) return RGBToCss(cold);

  let res = neutral;

  if (temp > 0) {
    // get gradient value from neutral to warm
    res = getRGBGradientValue(neutral, warm, temp, halvedResolution);
    return RGBToCss(res);
  }

  // get gradient value from neutral to cold
  res = getRGBGradientValue(neutral, cold, temp, halvedResolution);
  return RGBToCss(res);
};
