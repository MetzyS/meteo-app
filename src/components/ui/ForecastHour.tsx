import { datetimeToHour } from "../../helpers/dateParser";
import { Hourly } from "../../helpers/types";

import AutomaticForecastIcon from "./customicons/AutomaticForecastIcon";

const ForecastHour = (props: {
  data: Hourly;
  sunrise?: number;
  sunset?: number;
}) => {
  const hour = datetimeToHour(props.data.dt);
  return (
    <div className="flex flex-col gap-2 px-3 py-3 text-sm font-normal text-slate-500 items-center cursor-default justify-center rounded-md hover:bg-slate-600/30">
      <span>{hour}h</span>
      <span className="text-slate-100 text-xs">
        <span className="font-semibold text-sm">
          {Math.floor(props.data.temp)}
        </span>
        °
      </span>
      <span>
        <AutomaticForecastIcon
          weatherId={props.data.weather[0].id}
          sunrise={props.sunrise}
          sunset={props.sunset}
          hour={hour}
        />
      </span>
    </div>
  );
};

export default ForecastHour;
