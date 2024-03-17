export type CurrentWeatherDataType = {
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

interface DefaultWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Daily {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: {
    day: number;
    eve: number;
    morn: number;
    night: number;
  };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain: number;
  summary: string;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    eve: number;
    min: number;
    morn: number;
    night: number;
  };
  uvi: number;
  weather: DefaultWeather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface Hourly {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: DefaultWeather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export type ForecastWeatherDataType = {
  current: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    rain: {
      "1h": number;
    };
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: DefaultWeather[];
    wind_deg: number;
    wind_speed: number;
  };
  daily: Daily[];
  hourly: Hourly[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
};
