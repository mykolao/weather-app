import { ForecastData } from 'types';

// Calculate height px of item wrapper
// Calculate bottom margin offset px for item

export const useForecastItem = (
  value: ForecastData,
  baseValue: number,
  height: number,
  range: number,
  scale = 1,
) => {
  const temp = Math.round(value.temp); // current temp
  const base = Math.round(baseValue); //  minimal temp value

  const wrapperHeight = range * height * scale; // total wrapper h
  const offsetDx = (wrapperHeight - height) / range; // h fraction for single temp degree
  const itemOffset = (temp - base) * offsetDx; //  item float value

  return { wrapperHeight, itemOffset };
};
