import { ForecastWeatherDataType } from "../../../helpers/types";
import DefaultBlock from "../../ui/DefaultBlock";
import ForecastHour from "../../ui/ForecastHour";
import Subtitle from "../../ui/Subtitle";

const HourlyForecastBlock = (props: {
  data: ForecastWeatherDataType | undefined;
  summary: string;
  sunrise: number;
  sunset: number;
}) => {
  return (
    <>
      {props.data && (
        <DefaultBlock className="border border-slate-700 mt-6">
          <Subtitle title={props.summary} />
          <div className="flex my-2 overflow-x-scroll scrollbar-hide">
            {props.data.hourly.map((item, index) => (
              <ForecastHour
                data={item}
                key={index}
                sunrise={props.sunrise}
                sunset={props.sunset}
              />
            ))}
          </div>
        </DefaultBlock>
      )}
    </>
  );
};

export default HourlyForecastBlock;
