export type WeatherDataType = {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  rain: {
    "1h": number;
  };
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  wind: {
    deg: number;
    speed: number;
  };
};

export interface City {
  coord: {
    lon: number;
    lat: number;
  };
  country: string;
  geoname: {
    cl: string;
    code: string;
    parent: number;
  };
  id: number;
  langs: any[];
  name: string;
  stat: {
    level: number;
    population: number;
  };
  stations: any[];
  zoom: number;
}
