import CountryTitle from "../ui/CountryTitle";
import DefaultBlock from "../ui/DefaultBlock";
import { IoIosPartlySunny } from "react-icons/io";

const CurrentWeatherBlock = (props: { className: string }) => {
  return (
    <DefaultBlock className={props.className}>
      <CountryTitle country="paris" />
      <div className="flex justify-between text-slate-100 tracking-wide">
        <div className="flex flex-col gap-1">
          <span className="text-5xl font-normal">20°</span>
          <span className="text-sm">Pluvieux</span>
          <p className="text-sm font-light flex gap-2">
            <span>
              Max: <span className="mr-2 font-semibold">21°C</span>
            </span>
            <span>
              Min: <span className="font-semibold">12°C</span>
            </span>
          </p>
          <p className="text-sm font-light">05 Mars 2024 15:14</p>
        </div>
        <div className="flex items-end">
          <IoIosPartlySunny className="size-16" />
        </div>
      </div>
    </DefaultBlock>
  );
};

export default CurrentWeatherBlock;
