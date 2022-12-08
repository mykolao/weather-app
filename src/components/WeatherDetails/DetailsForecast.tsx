import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ForecastChart from 'components/ForecastChart';
import { theme } from 'mui/theme';
import { ForecastData } from 'types';

interface Props {
  forecast: ForecastData[];
}

export const DetailsForecast = ({ forecast }: Props) => {
  const slicedForecast = forecast.slice(0, 12);

  return (
    <CardContent>
      <Typography
        variant="h6"
        component="h3"
        color={theme.palette.grey.A400}
      >
        36 Hour Forecast
      </Typography>
      <ForecastChart forecast={slicedForecast} />
    </CardContent>
  );
};
