export const minMax = (values: number[]) => {
  return values.reduce(
    (values, current) => {
      let min = values[0];
      let max = values[1];

      if (current < min) min = current;
      if (current > max) max = current;

      return [min, max];
    },
    [values[0], values[0]],
  );
};
