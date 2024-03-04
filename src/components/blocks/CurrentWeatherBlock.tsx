import CountryTitle from "../ui/CountryTitle";
import DefaultBlock from "../ui/DefaultBlock";
import DefaultTitle from "../ui/DefaultTitle";
import { IoIosPartlySunny } from "react-icons/io";

const CurrentWeatherBlock = (props: { className: string }) => {
  return (
    <DefaultBlock className={props.className}>
      <CountryTitle country="paris" />
      <div className="flex justify-between">
        <div className="mt-6 flex flex-col gap-1">
          <DefaultTitle title="temperature" />
          <span className="text-5xl text-neutral-700 font-semibold">20°</span>
        </div>
        <div className="flex items-end">
          <IoIosPartlySunny className="size-16 text-neutral-700" />
        </div>
      </div>
      <span className="text-neutral-700 text-xs italic">Ressenti: 16°</span>
    </DefaultBlock>
  );
};

export default CurrentWeatherBlock;
