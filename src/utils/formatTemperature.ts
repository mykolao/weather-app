export const formatTemperature = (temp: number) => {
  const sign = temp > 0 ? '+' : '-';
  const value = Math.round(Math.abs(temp));

  return value ? `${sign}${value}` : `0`;
};
