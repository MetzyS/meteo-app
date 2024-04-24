import { datetimeToDay } from "../../helpers/dateParser";
import themeColor from "../../helpers/themeColor";
import { Daily } from "../../helpers/types";
import LineGauge from "./LineGauge";
const ForecastDay = (props: { data: Daily; index: number }) => {
  const day = datetimeToDay(props.data.dt);
  const icon = themeColor(props.data.weather[0].id, "size-6");
  return (
    <>
      <span className="text-white w-20">{day}</span>
      <span>{icon.icon}</span>
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
