import { datetimeToDay } from "../../helpers/dateParser";
import { Daily } from "../../helpers/types";
import Gauge from "./Gauge";
import LineGauge from "./LineGauge";
import AutomaticForecastIcon from "./customicons/AutomaticForecastIcon";
const ForecastDay = (props: { data: Daily }) => {
  // console.log(props.data);
  const day = datetimeToDay(props.data.dt);
  return (
    <>
      <span className="text-white w-20">{day}</span>
      <span>
        <AutomaticForecastIcon
          weatherId={props.data.weather[0].id}
          size="size-6"
        />
      </span>
      <span className="text-slate-400">{props.data.humidity}%</span>
      <span className="hidden sm:block text-blue-600">
        <LineGauge />
      </span>
      <span className="text-slate-400">{Math.floor(props.data.temp.min)}°</span>
      <span className="text-white">{Math.floor(props.data.temp.max)}°</span>
    </>
  );
};

export default ForecastDay;
