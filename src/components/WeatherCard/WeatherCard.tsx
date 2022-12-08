import { useState } from 'react';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Zoom from '@mui/material/Zoom';
import { WeatherCardActions } from 'components/WeatherCard/WeatherCardActions';
import { WeatherCardContent } from 'components/WeatherCard/WeatherCardContent';
import { WeatherCardHeader } from 'components/WeatherCard/WeatherCardHeader';
import { WeatherCardRemoveButton } from 'components/WeatherCard/WeatherCardRemoveButton';
import { useLocations } from 'store/weather';
import { Location } from 'store/weather/types';

interface Props {
  value: Location;
}

export const WeatherCard = ({ value }: Props) => {
  const location = value;
  const { name, country, currentWeather, lat, lon } = location;
  const geo = { lat, lon };

  const [isHovered, setIsHovered] = useState(false);

  const { removeCity } = useLocations();

  const handleDeleteItem = () => removeCity(location);
  const handleHover = () => setIsHovered(true);
  const handleLeave = () => setIsHovered(false);

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Zoom in timeout={250}>
        <Card onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <WeatherCardHeader name={name} country={country}>
            <WeatherCardRemoveButton
              isVisible={isHovered}
              onClick={handleDeleteItem}
            />
          </WeatherCardHeader>
          <Divider />
          <WeatherCardContent weatherData={currentWeather} />
          <WeatherCardActions geo={geo} />
        </Card>
      </Zoom>
    </Grid>
  );
};
