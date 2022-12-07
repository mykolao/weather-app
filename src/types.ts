export interface Geo {
  lon: number;
  lat: number;
}

export interface CityInfo extends Geo {
  name: string;
  country: string;
}

export interface WeatherData {
  temp: number;
  humidity: number;
  pressure: number;
  feels_like: number;
  description: string;
  icon: string;
}
