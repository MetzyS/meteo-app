import { currentDate } from "../../../helpers/dateParser";
import { CurrentWeatherDataType } from "../../../helpers/types";
import CountryTitle from "../../ui/CountryTitle";
import DefaultBlock from "../../ui/DefaultBlock";
import Gauge from "../../ui/Gauge";

const CurrentWeatherBlock = (props: {
  className: string;
  data: CurrentWeatherDataType | undefined;
}) => {
  const date = currentDate();
  return (
    <>
      {props.data && (
        <DefaultBlock className={props.className}>
          <CountryTitle country={props.data.name} />
          <div className="flex justify-between text-slate-100 tracking-wide">
            <div className="flex flex-col gap-1 justify-center">
              <span className="text-5xl font-normal">
                {Math.floor(props.data.main.temp) + "°C"}
              </span>
              <span className="text-sm first-letter:capitalize">
                {props.data.weather[0].description}
              </span>
              <p className="text-sm font-light flex gap-2">
                <span>
                  Max:{" "}
                  <span className="mr-2 font-semibold">
                    {Math.floor(props.data.main.temp_max) + "°C"}
                  </span>
                </span>
                <span>
                  Min:{" "}
                  <span className="font-semibold">
                    {Math.floor(props.data.main.temp_min) + "°C"}
                  </span>
                </span>
              </p>
              <p className="text-sm font-light">{date}</p>
            </div>
            <div className="flex items-end relative">
              <Gauge
                percent={props.data.main.humidity}
                // width={160}
                // height={160}
                className="size-36"
              />
              <span className="absolute mx-auto top-[50%] left-[50%] -translate-x-1/2 text-sm text-center">
                <span className="text-xl font-bold">
                  {props.data.main.humidity + "%"}
                </span>
                <br /> Humidité
              </span>
            </div>
          </div>
        </DefaultBlock>
      )}
    </>
  );
};

export default CurrentWeatherBlock;
