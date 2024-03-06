import { FaCloudMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { RiCloudWindyFill } from "react-icons/ri";
import { IoRainy } from "react-icons/io5";
import { FaCloudMoonRain } from "react-icons/fa";
import { IoIosCloud } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";

const ForecastHour = (props: {
  data: {
    hour: string;
    temp: string;
    icon: string;
  };
}) => {
  let icon;
  let iconSize = "size-5";
  let iconColor;
  switch (props.data.icon) {
    case "cloud":
      icon = <IoIosCloud className={iconSize} />;
      iconColor = "text-white";
      break;
    case "nightcloud":
      icon = <FaCloudMoon className={iconSize} />;
      iconColor = "text-white";
      break;
    case "sun":
      icon = <MdSunny className={iconSize} />;
      iconColor = "text-yellow-500";
      break;
    case "night":
      icon = <BsMoonStarsFill className={iconSize} />;
      iconColor = "text-white";
      break;
    case "wind":
      icon = <RiCloudWindyFill className={iconSize} />;
      iconColor = "text-white";
      break;
    case "rain":
      icon = <IoRainy className={iconSize} />;
      iconColor = "text-white";
      break;
    case "nightrain":
      icon = <FaCloudMoonRain className={iconSize} />;
      iconColor = "text-white";
      break;
  }
  return (
    <div className="flex flex-col gap-2 px-3 py-3 text-sm font-normal text-slate-500 items-center cursor-default justify-center">
      <span>{props.data.hour}</span>
      <span className="text-slate-100">{props.data.temp}</span>
      <span className={iconColor}>{icon}</span>
    </div>
  );
};

export default ForecastHour;
