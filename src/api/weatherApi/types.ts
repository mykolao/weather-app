export interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
    feels_like: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
}
