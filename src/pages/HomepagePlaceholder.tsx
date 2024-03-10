import CurrentWeatherPlaceholder from "../components/ui/placeholders/CurrentWeatherPlaceholder";
import ForecastPlaceholder from "../components/ui/placeholders/ForecastHourPlaceholder";

const HomepagePlaceholder = () => {
  return (
    <div className="animate-pulse">
      <CurrentWeatherPlaceholder />
      <ForecastPlaceholder />
    </div>
  );
};

export default HomepagePlaceholder;
