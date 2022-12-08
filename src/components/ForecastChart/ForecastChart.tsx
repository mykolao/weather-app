import { useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { ForecastItem } from 'components/ForecastChart/ForecastItem';
import { ForecastData } from 'types';
import { minMax } from 'utils';
interface Props {
  forecast: ForecastData[];
}

export const ForecastChart = ({ forecast }: Props) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const temperatures = forecast.map(({ temp }) => temp);
  const [min, max] = minMax(temperatures);
  const range = max - min;

  // Calculate chart scale using media queries
  let scale = 0.65; // default value

  if (isXs) scale = 0.35;

  return (
    <Grid container spacing={0.5} mt={1}>
      {forecast.map((item) => (
        <ForecastItem
          scale={scale}
          range={range}
          baseValue={min}
          value={{ ...item }}
          key={item.timestamp}
        />
      ))}
    </Grid>
  );
};
