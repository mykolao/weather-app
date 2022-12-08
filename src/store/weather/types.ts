import { CityInfo, ForecastData, WeatherData } from 'types';

export interface Location extends CityInfo {
  currentWeather: WeatherData;
  forecast: ForecastData[];
}

export interface WeatherState {
  isLoading: boolean;
  locations: Location[];
}
