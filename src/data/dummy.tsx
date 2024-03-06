import { fetchWeatherApi } from "openmeteo";

export const fetchParams = (lat: number, long: number) => {
  return {
    latitude: lat,
    longitude: long,
    current: [
      "temperature_2m",
      "apparent_temperature",
      "is_day",
      "precipitation",
      "weather_code",
      "wind_speed_10m",
    ],
    hourly: ["temperature_2m", "weather_code"],
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "sunrise",
      "sunset",
    ],
    forecast_hours: 1,
  };
};

export async function fetchData(lat: number, long: number) {
  const params = {
    latitude: lat,
    longitude: long,
    current: [
      "temperature_2m",
      "apparent_temperature",
      "is_day",
      "precipitation",
      "weather_code",
      "wind_speed_10m",
    ],
    hourly: ["temperature_2m", "weather_code"],
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "sunrise",
      "sunset",
    ],
    forecast_hours: 1,
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();

  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      apparentTemperature: current.variables(1)!.value(),
      isDay: current.variables(2)!.value(),
      precipitation: current.variables(3)!.value(),
      weatherCode: current.variables(4)!.value(),
      windSpeed10m: current.variables(5)!.value(),
    },
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      weatherCode: hourly.variables(1)!.valuesArray()!,
    },
    daily: {
      time: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperature2mMax: daily.variables(1)!.valuesArray()!,
      temperature2mMin: daily.variables(2)!.valuesArray()!,
      sunrise: daily.variables(3)!.valuesArray()!,
      sunset: daily.variables(4)!.valuesArray()!,
    },
  };
  return weatherData;
}

export const hourlyTemps = [
  {
    hour: "05",
    temp: "3°",
    icon: "cloud",
  },
  {
    hour: "06",
    temp: "3°",
    icon: "wind",
  },
  {
    hour: "07",
    temp: "2°",
    icon: "cloud",
  },
  {
    hour: "08",
    temp: "3°",
    icon: "cloud",
  },
  {
    hour: "09",
    temp: "3°",
    icon: "cloud",
  },
  {
    hour: "10",
    temp: "5°",
    icon: "sun",
  },
  {
    hour: "11",
    temp: "7°",
    icon: "sun",
  },
  {
    hour: "12",
    temp: "8°",
    icon: "sun",
  },
  {
    hour: "13",
    temp: "12°",
    icon: "sun",
  },
  {
    hour: "14",
    temp: "14°",
    icon: "sun",
  },
  {
    hour: "15",
    temp: "14°",
    icon: "cloud",
  },
  {
    hour: "16",
    temp: "13°",
    icon: "cloud",
  },
  {
    hour: "17",
    temp: "13°",
    icon: "wind",
  },
  {
    hour: "18",
    temp: "10°",
    icon: "wind",
  },
  {
    hour: "19",
    temp: "9°",
    icon: "nightcloud",
  },
  {
    hour: "20",
    temp: "9°",
    icon: "nightcloud",
  },
  {
    hour: "21",
    temp: "8°",
    icon: "night",
  },
  {
    hour: "22",
    temp: "7°",
    icon: "night",
  },
  {
    hour: "23",
    temp: "7°",
    icon: "nightrain",
  },
  {
    hour: "00",
    temp: "5°",
    icon: "nightrain",
  },
  {
    hour: "01",
    temp: "5°",
    icon: "nightcloud",
  },
  {
    hour: "02",
    temp: "5°",
    icon: "night",
  },
  {
    hour: "03",
    temp: "4°",
    icon: "night",
  },
  {
    hour: "04",
    temp: "3°",
    icon: "night",
  },
];
