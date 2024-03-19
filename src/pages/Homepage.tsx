import CurrentWeatherBlock from "../components/blocks/CurrentWeather/CurrentWeatherBlock";
import DailyForecastBlock from "../components/blocks/Forecast/DailyForecast";
import HourlyForecastBlock from "../components/blocks/Forecast/HourlyForecastBlock";
import {
  CurrentWeatherDataType,
  ForecastWeatherDataType,
} from "../helpers/types";

const Homepage = (props: {
  currentWeather: CurrentWeatherDataType | undefined;
  forecastWeather: ForecastWeatherDataType | undefined;
  summary: string;
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
        className="mt-6 bg-cover bg-rain"
        data={props.currentWeather}
      />
      <HourlyForecastBlock
        data={props.forecastWeather}
        summary={props.summary}
        sunrise={sunrise}
        sunset={sunset}
      />
      <DailyForecastBlock data={props.forecastWeather.daily} />
    </>
  );
};

export default Homepage;
