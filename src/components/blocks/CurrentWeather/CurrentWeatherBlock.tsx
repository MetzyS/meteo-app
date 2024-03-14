import { WeatherDataType } from "../../../helpers/types";
import CountryTitle from "../../ui/CountryTitle";
import DefaultBlock from "../../ui/DefaultBlock";
import { IoIosPartlySunny } from "react-icons/io";

const CurrentWeatherBlock = (props: {
  className: string;
  data: WeatherDataType;
}) => {
  const currentDate = () => {
    const today = new Date();
    const fullDate =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes();
    return fullDate;
  };

  const date = currentDate();
  return (
    <DefaultBlock className={props.className}>
      <CountryTitle country={props.data.name} />
      <div className="flex justify-between text-slate-100 tracking-wide">
        <div className="flex flex-col gap-1">
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
        <div className="flex items-end">
          <div className="size-24 bg-red-500 rounded-full border-[8px] border-dashed"></div>
          {/* <IoIosPartlySunny className="size-16" /> */}
        </div>
      </div>
    </DefaultBlock>
  );
};

export default CurrentWeatherBlock;
