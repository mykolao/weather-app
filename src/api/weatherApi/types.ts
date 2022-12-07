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

export interface ForecastResponse {
  list: {
    dt: number;
    dt_txt: string;
    main: {
      temp: number;
      humidity: number;
      pressure: number;
      feels_like: number;
    };
  }[];
}
