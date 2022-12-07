export interface Geo {
  lon: number;
  lat: number;
}

export interface CityInfo extends Geo {
  name: string;
  country: string;
}
