import { datetimeToDay } from "../../helpers/dateParser";
import { Daily } from "../../helpers/types";
import LineGauge from "./LineGauge";
import AutomaticForecastIcon from "./customicons/AutomaticForecastIcon";
const ForecastDay = (props: { data: Daily; index: number }) => {
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
      <span className="text-slate-400 text-right w-9">
        {props.data.humidity}%
      </span>
      <span className="hidden sm:block text-blue-600">
        <LineGauge percent={props.data.humidity} index={props.index} />
      </span>
      <span className="text-slate-400 w-6">
        {Math.floor(props.data.temp.min)}°
      </span>
      <span className="text-white w-6">{Math.floor(props.data.temp.max)}°</span>
    </>
  );
};

export default ForecastDay;
