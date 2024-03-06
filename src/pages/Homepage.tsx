import CurrentWeatherBlock from "../components/blocks/CurrentWeather/CurrentWeatherBlock";
import ForecastBlock from "../components/blocks/Forecast/ForecastBlock";

const Homepage = (props: { data: [] }) => {
  return (
    <>
      <CurrentWeatherBlock className="mt-6 bg-cover bg-rain" />
      <ForecastBlock data={props.data} />
    </>
  );
};

export default Homepage;
