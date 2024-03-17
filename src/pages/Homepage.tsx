import CurrentWeatherBlock from "../components/blocks/CurrentWeather/CurrentWeatherBlock";
import ForecastBlock from "../components/blocks/Forecast/ForecastBlock";
import {
  CurrentWeatherDataType,
  ForecastWeatherDataType,
} from "../helpers/types";

const Homepage = (props: {
  currentWeather: CurrentWeatherDataType | undefined;
  forecastWeather: ForecastWeatherDataType | undefined;
}) => {
  return (
    <>
      <CurrentWeatherBlock
        className="mt-6 bg-cover bg-rain"
        data={props.currentWeather}
      />
      <ForecastBlock data={props.forecastWeather} />
    </>
  );
};

export default Homepage;
