import CurrentWeatherBlock from "../components/blocks/CurrentWeather/CurrentWeatherBlock";
import ForecastBlock from "../components/blocks/Forecast/ForecastBlock";
import { WeatherDataType } from "../helpers/types";

const Homepage = (props: { data: WeatherDataType }) => {
  return (
    <>
      <CurrentWeatherBlock
        className="mt-6 bg-cover bg-[#151820]"
        data={props.data}
      />
      {/* <ForecastBlock data={props.data} /> */}
    </>
  );
};

export default Homepage;
