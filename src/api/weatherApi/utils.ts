import {
  ForecastResponse,
  WeatherResponse,
} from 'api/weatherApi/types';
import { ForecastData, WeatherData } from 'types';

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

export const transformForecastResponse = (
  data: ForecastResponse,
): ForecastData[] => {
  const { list } = data;

  const transformedData = list.map((entry) => {
    const { dt: timestamp, dt_txt: date, main } = entry;
    const { temp, pressure, humidity, feels_like } = main;

    const transformed: ForecastData = {
      timestamp,
      date,
      temp,
      pressure,
      humidity,
      feels_like,
    };

    return transformed;
  });

  return transformedData;
};
