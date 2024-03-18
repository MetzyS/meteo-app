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
  return (
    <>
      <CurrentWeatherBlock
        className="mt-6 bg-cover bg-rain"
        data={props.currentWeather}
      />
      <HourlyForecastBlock
        data={props.forecastWeather}
        summary={props.summary}
      />
      <DailyForecastBlock />
    </>
  );
};

export default Homepage;
