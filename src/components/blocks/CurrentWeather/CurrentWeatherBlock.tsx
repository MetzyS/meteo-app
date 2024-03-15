import { WeatherDataType } from "../../../helpers/types";
import CountryTitle from "../../ui/CountryTitle";
import DefaultBlock from "../../ui/DefaultBlock";
import { IoIosPartlySunny } from "react-icons/io";
import Gauge from "../../ui/Gauge";

const CurrentWeatherBlock = (props: {
  className: string;
  data: WeatherDataType;
}) => {
  const currentDate = () => {
    const today = new Date();
    const months = "0" + (today.getMonth() + 1);
    const hours = "0" + today.getHours();
    const minutes = "0" + today.getMinutes();
    const fullDate =
      today.getDate() +
      "/" +
      months.slice(-2) +
      "/" +
      today.getFullYear() +
      " " +
      hours.slice(-2) +
      "h" +
      minutes.slice(-2);
    return fullDate;
  };

  const date = currentDate();
  return (
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
          <Gauge percent={10} width={150} height={150} />
          {/* <div className="size-28 gauge"></div> */}
          {/* <div className="w-24 h-20 bg-gauge bg-cover absolute right-0"></div>
          <div className="w-[50px] h-[70px] overflow-hidden -left-24 absolute">
            <div className="w-24 h-20 bg-gaugefull bg-cover absolute bottom-0"></div>
          </div> */}
          {/* <IoIosPartlySunny className="size-16" /> */}
        </div>
      </div>
    </DefaultBlock>
  );
};

export default CurrentWeatherBlock;
