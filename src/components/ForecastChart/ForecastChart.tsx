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
  const isMd = useMediaQuery(theme.breakpoints.down('lg'));
  const isSm = useMediaQuery(theme.breakpoints.down('md'));

  const temperatures = forecast.map(({ temp }) => temp);
  const [min, max] = minMax(temperatures);
  const range = max - min;

  // Calculate chart scale using media queries
  let scale = 0.5; // default value

  if (isMd) {
    scale = isSm ? 0.35 : 0.45;
  }

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
