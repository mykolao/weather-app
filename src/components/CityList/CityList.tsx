import { FC } from 'react';

import { Box, Grid, Typography } from '@mui/material';
import WeatherCard from 'components/WeatherCard';
import { customStyles } from 'mui/customStyles';
import { useLocations } from 'store/weather';

const boxStyles = customStyles({
  width: 1,
  display: 'flex',
  justifyContent: 'center',
});

export const CityList: FC = () => {
  const { locations } = useLocations();

  if (!locations.length) {
    return <Typography variant="h4">No Selected Cities</Typography>;
  }

  return (
    <Box component="section" sx={boxStyles}>
      <Grid
        container
        spacing={{ md: 3, sm: 2, xs: 1 }}
        justifyContent="center"
      >
        {locations.map((location) => (
          <WeatherCard key={location.lat} value={location} />
        ))}
      </Grid>
    </Box>
  );
};
