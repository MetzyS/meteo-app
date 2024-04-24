import CurrentWeatherBlock from "../components/blocks/CurrentWeather/CurrentWeatherBlock";
import DailyForecastBlock from "../components/blocks/Forecast/DailyForecast";
import HourlyForecastBlock from "../components/blocks/Forecast/HourlyForecastBlock";
import TestMap from "../components/map/TestMap";
import DefaultBlock from "../components/ui/DefaultBlock";
import {
  CurrentWeatherDataType,
  ForecastWeatherDataType,
} from "../helpers/types";

const Homepage = (props: {
  currentWeather: CurrentWeatherDataType | undefined;
  forecastWeather: ForecastWeatherDataType | undefined;
  summary: string;
  coord: { lat: number; lon: number };
  city: string;
}) => {
  let sunrise = 0;
  let sunset = 0;
  if (props.forecastWeather) {
    sunrise = props.forecastWeather.current.sunrise;
    sunset = props.forecastWeather.current.sunset;
  }
  return (
    <>
      <CurrentWeatherBlock
        className="mt-6 bg-cover bg-black/25"
        data={props.currentWeather}
        weatherId={props.forecastWeather.daily[0].weather[0].id}
      />
      <HourlyForecastBlock
        data={props.forecastWeather}
        summary={props.summary}
        sunrise={sunrise}
        sunset={sunset}
      />
      <DailyForecastBlock data={props.forecastWeather.daily} />
      <DefaultBlock className="mt-6 bg-cover bg-neutral-950/35">
        <TestMap coord={props.coord} height="350px" zoom={4} />
      </DefaultBlock>
    </>
  );
};

export default Homepage;
