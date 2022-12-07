import { WeatherResponse } from 'api/weatherApi/types';
import { WeatherData } from 'types';

const getWeatherIconUrl = (id: string) => {
  return `https://openweathermap.org/img/wn/${id}@2x.png`;
};

export const transformWeatherResponse = (
  data: WeatherResponse,
): WeatherData => {
  const { main, weather } = data;
  const { main: description, icon: iconId } = weather[0];

  const icon = getWeatherIconUrl(iconId);

  const transformedData: WeatherData = {
    ...main,
    description,
    icon,
  };

  return transformedData;
};
