import { datetimeToHour } from "../../helpers/dateParser";
import { Hourly } from "../../helpers/types";

import AutomaticForecastIcon from "./customicons/AutomaticForecastIcon";

const ForecastHour = (props: { data: Hourly }) => {
  const hour = datetimeToHour(props.data.dt);
  return (
    <div className="flex flex-col gap-2 px-3 py-3 text-sm font-normal text-slate-500 items-center cursor-default justify-center">
      <span>{hour}h</span>
      <span className="text-slate-100 text-xs">
        <span className="font-semibold text-sm">
          {Math.floor(props.data.temp)}
        </span>
        °
      </span>
      <span>
        <AutomaticForecastIcon weatherId={props.data.weather[0].id} />
      </span>
    </div>
  );
};

export default ForecastHour;
