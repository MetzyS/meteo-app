import { MdSunny as Sun } from "react-icons/md";
import { IoIosCloud as Cloud } from "react-icons/io";
import { MdThunderstorm as Thunderstorm } from "react-icons/md";
import { MdFoggy as Fog } from "react-icons/md";
import { FaTornado as Tornado } from "react-icons/fa6";
import { BsCloudSnowFill as Snow } from "react-icons/bs";
import { FiWind as Squall } from "react-icons/fi";
import { BsFillSunriseFill } from "react-icons/bs";
import { BsFillSunsetFill } from "react-icons/bs";
import SunCloud from "./SunCloud";
import HeavyRain from "./HeavyRain";
import LightRain from "./LighRain";

const AutomaticForecastIcon = (props: {
  weatherId: number;
  size?: string;
  sunrise?: number;
  sunset?: number;
  hour?: number;
}) => {
  // console.log(props.sunrise);
  let icon = <Sun />;
  let iconSize;
  if (props.size) {
    iconSize = props.size;
  } else {
    iconSize = "size-8";
  }
  const sunColor = "fill-yellow-500";
  const rainColor = "fill-blue-300";
  const iconColor = "fill-white";
  const iconDarkColor = "fill-neutral-400";

  const weatherId = props.weatherId;
  switch (true) {
    case weatherId >= 200 && weatherId <= 233:
      // Orage
      icon = <Thunderstorm className={`${iconColor} ${iconSize}`} />;
      break;
    case weatherId >= 300 && weatherId <= 321:
      // Bruine (pluie fine)
      // icon = <Rain className={`${iconColor} ${iconSize}`} />;
      icon = (
        <LightRain
          size={iconSize}
          cloudColor={iconColor}
          rainColor={rainColor}
        />
      );
      break;
    case weatherId >= 500 && weatherId <= 531:
      // Pluie
      icon = (
        <HeavyRain
          size={iconSize}
          cloudColor={iconColor}
          rainColor={rainColor}
        />
      );
      // icon = <Rain className={`${iconDarkColor} ${iconSize}`} />;
      icon = (
        <HeavyRain
          size={iconSize}
          cloudColor={iconDarkColor}
          rainColor={rainColor}
        />
      );
      break;
    case weatherId >= 600 && weatherId <= 622:
      // Neige
      icon = <Snow className={`${iconColor} ${iconSize}`} title="Neige" />;
      break;
    case weatherId >= 701 && weatherId <= 781:
      // Atmosphère
      if (weatherId == 701) {
        // Brume moyenne
        icon = <Fog className={`${iconColor} ${iconSize}`} />;
      } else if (weatherId == 711) {
        // Fumée
        icon = <Fog className={`${iconColor} ${iconSize}`} />;
      } else if (weatherId == 721) {
        // Brume légère
        icon = <Fog className={`${iconColor} ${iconSize}`} />;
      } else if (weatherId == 731) {
        // Poussière
        icon = <Fog className={`${iconColor} ${iconSize}`} />;
      } else if (weatherId == 741) {
        // Brume
        icon = <Fog className={`${iconColor} ${iconSize}`} />;
      } else if (weatherId == 751) {
        // Sable
        icon = <Fog className={`${iconColor} ${iconSize}`} />;
      } else if (weatherId == 761) {
        // Poussière
        icon = <Fog className={`${iconColor} ${iconSize}`} />;
      } else if (weatherId == 762) {
        // Cendre volcanique
        icon = <Fog className={`${iconColor} ${iconSize}`} />;
      } else if (weatherId == 771) {
        // Bourrasque
        icon = <Squall className={`${iconColor} ${iconSize}`} />;
      } else if (weatherId == 781) {
        // Tornade
        icon = <Tornado className={`${iconColor} ${iconSize}`} />;
      } else {
        // Pas d'infos particulière, atmosphère chargée
        icon = <Fog className={`${iconColor} ${iconSize}`} />;
      }
      break;
    case weatherId == 800:
      icon = <Sun className={`${sunColor} ${iconSize}`} />;
      // Ciel dégagé

      break;
    case weatherId >= 801 && weatherId <= 804:
      // Nuages
      if (weatherId == 801) {
        // Peu de nuages (11-25%)
        // icon = <FewClouds className={`${iconColor} ${iconSize}`} />;
        icon = (
          <SunCloud
            size={iconSize}
            sunColor={sunColor}
            cloudColor={iconColor}
          />
        );
      } else if (weatherId == 802) {
        // Nuages dispersés (25-50%)
        icon = (
          <SunCloud
            size={iconSize}
            sunColor={sunColor}
            cloudColor={iconColor}
          />
        );
      } else if (weatherId == 803) {
        // Nuages morcelés (51-84%)
        icon = <Cloud className={`${iconColor} ${iconSize}`} />;
      } else if (weatherId == 804) {
        // Ciel couvert (85-100%)
        icon = <Cloud className={`${iconDarkColor} ${iconSize}`} />;
      } else {
        icon = <Cloud className={`${iconColor} ${iconSize}`} />;
      }
      break;
  }
  if (props.sunrise && props.sunset) {
    const sunrise = new Date(props.sunrise * 1000).getHours();
    const sunset = new Date(props.sunset * 1000).getHours();
    if (props.hour === sunrise) {
      icon = <BsFillSunriseFill className={`${iconSize} fill-amber-600`} />;
    }
    if (props.hour === sunset) {
      icon = <BsFillSunsetFill className={`${iconSize} fill-amber-600`} />;
    }
  }
  return <>{icon}</>;
};

export default AutomaticForecastIcon;
