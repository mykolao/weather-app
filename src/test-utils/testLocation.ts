import { Location } from 'store/weather/types';

export const testLocation: Location = {
  country: 'country',
  name: 'name',
  lat: 1,
  lon: 1,
  currentWeather: {
    description: 'description',
    temp: 10,
    feels_like: 10,
    humidity: 50,
    pressure: 1000,
    icon: '',
  },
  forecast: [
    {
      date: '2022',
      timestamp: Date.now(),
      temp: 10,
      feels_like: 10,
      humidity: 50,
      pressure: 1000,
    },
  ],
};
