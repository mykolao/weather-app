import { memo } from 'react';

import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { customStyles } from 'mui/customStyles';
import { WeatherData } from 'types';
import { formatTemperature } from 'utils';

interface Props {
  weatherData: WeatherData;
}

const cardStyles = customStyles({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const boxStyles = customStyles({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& img': {
    margin: '-10px -20px -15px -20px',
  },
});

export const WeatherCardContent = memo(({ weatherData }: Props) => {
  const { temp, icon, description } = weatherData;

  return (
    <CardContent sx={cardStyles}>
      <Typography variant="h2" component="span">
        {formatTemperature(temp)}&deg;
      </Typography>
      <Box sx={boxStyles}>
        <img src={icon} alt={description} />
        <Typography variant="subtitle1">{description}</Typography>
      </Box>
    </CardContent>
  );
});
