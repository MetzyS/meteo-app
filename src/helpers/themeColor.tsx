import { MdSunny as Sun } from "react-icons/md";
import { IoIosCloud as Cloud } from "react-icons/io";
import { MdThunderstorm as Thunderstorm } from "react-icons/md";
import { MdFoggy as Fog } from "react-icons/md";
import { FaTornado as Tornado } from "react-icons/fa6";
import { BsCloudSnowFill as Snow } from "react-icons/bs";
import { FiWind as Squall } from "react-icons/fi";
import { BsFillSunriseFill } from "react-icons/bs";
import { BsFillSunsetFill } from "react-icons/bs";
import { IoMoonSharp as Moon } from "react-icons/io5";
import SunCloud from "../components/ui/customicons/SunCloud";
import HeavyRain from "../components/ui/customicons/HeavyRain";
import LightRain from "../components/ui/customicons/LighRain";
import isDay from "./isDay";
import MoonCloud from "../components/ui/customicons/MoonCloud";
import RainAnimation from "../components/animations/RainAnimation";
import SnowAnimation from "../components/animations/SnowAnimation";
import ThunderAnimation from "../components/animations/ThunderAnimation";

const themeColor = (
  weatherId: number,
  iconSize?: string,
  sunrise?: number,
  sunset?: number,
  hour?: number
) => {
  const sunColor = "fill-yellow-500";
  const moonColor = "fill-zinc-300";
  const rainColor = "fill-blue-300";
  const iconColor = "fill-white";
  const iconDarkColor = "fill-neutral-400";

  const bgBadWeather = "bg-neutral-400";
  const bgBadWeatherLight = "bg-neutral-300";
  const bgBadWeatherNight = "bg-slate-500";

  const bgClearDay = "bg-blue-300";
  const bgClearNight = "bg-slate-500";
  const bgSnow = "bg-gray-200";
  const bgSand = "bg-orange-200";

  interface theme {
    icon: JSX.Element;
    iconSize: string;
    background: string;
    weatherAnimation: JSX.Element;
    weatherId: number;
  }

  let theme: theme = {
    icon: <></>,
    iconSize: "size-8",
    background: "bg-blue-400",
    weatherAnimation: <></>,
    weatherId: weatherId,
  };

  if (iconSize && iconSize != "") {
    theme.iconSize = iconSize;
  }

  switch (true) {
    case weatherId >= 200 && weatherId <= 233:
      // Orage
      theme.icon = (
        <Thunderstorm className={`${iconColor} ${theme.iconSize}`} />
      );
      theme.background = bgBadWeather;
      theme.weatherAnimation = <ThunderAnimation />;
      break;
    case weatherId >= 300 && weatherId <= 321:
      // Bruine (pluie fine)
      theme.icon = (
        <LightRain
          size={theme.iconSize}
          cloudColor={iconColor}
          rainColor={rainColor}
        />
      );
      theme.background = bgBadWeather;
      theme.weatherAnimation = <RainAnimation intensity="light" />;
      break;
    case weatherId >= 500 && weatherId <= 531:
      // Pluie
      theme.icon = (
        <HeavyRain
          size={theme.iconSize}
          cloudColor={iconDarkColor}
          rainColor={rainColor}
        />
      );
      theme.background = bgBadWeather;
      theme.weatherAnimation = <RainAnimation intensity="normal" />;
      break;
    case weatherId >= 600 && weatherId <= 622:
      // Neige
      theme.icon = (
        <Snow className={`${iconColor} ${theme.iconSize}`} title="Neige" />
      );
      theme.background = bgSnow;
      theme.weatherAnimation = <SnowAnimation />;
      break;
    case weatherId >= 701 && weatherId <= 781:
      // Atmosphère
      if (weatherId == 701) {
        // Brume moyenne
        theme.icon = <Fog className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgSnow;
      } else if (weatherId == 711) {
        // Fumée
        theme.icon = <Fog className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgSnow;
      } else if (weatherId == 721) {
        // Brume légère
        theme.icon = <Fog className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgSnow;
      } else if (weatherId == 731) {
        // Poussière
        theme.icon = <Fog className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgSand;
      } else if (weatherId == 741) {
        // Brume
        theme.icon = <Fog className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgSnow;
      } else if (weatherId == 751) {
        // Sable
        theme.icon = <Fog className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgSand;
      } else if (weatherId == 761) {
        // Poussière
        theme.icon = <Fog className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgSand;
      } else if (weatherId == 762) {
        // Cendre volcanique
        theme.icon = <Fog className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgSand;
      } else if (weatherId == 771) {
        // Bourrasque
        theme.icon = <Squall className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgSnow;
      } else if (weatherId == 781) {
        // Tornade
        theme.icon = <Tornado className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgSnow;
      } else {
        // Pas d'infos particulière, atmosphère chargée
        theme.icon = <Fog className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgSnow;
      }
      break;
    case weatherId == 800:
      theme.icon = <Sun className={`${sunColor} ${theme.iconSize}`} />;
      theme.background = bgClearDay;
      // Ciel dégagé
      if (sunrise && sunset && hour) {
        const hourSunRise = new Date(sunrise * 1000).getHours();
        const hourSunset = new Date(sunset * 1000).getHours();
        const dayTime = isDay(hour, hourSunRise, hourSunset);
        if (!dayTime) {
          theme.icon = <Moon className={`${moonColor} ${theme.iconSize}`} />;
          theme.background = bgClearNight;
        }
      }
      break;
    case weatherId >= 801 && weatherId <= 804:
      // Nuages
      if (weatherId == 801) {
        // Peu de nuages (11-25%)
        theme.icon = (
          <SunCloud
            size={theme.iconSize}
            sunColor={sunColor}
            cloudColor={iconColor}
          />
        );
        theme.background = bgClearDay;

        if (sunrise && sunset && hour) {
          const hourSunRise = new Date(sunrise * 1000).getHours();
          const hourSunset = new Date(sunset * 1000).getHours();
          const dayTime = isDay(hour, hourSunRise, hourSunset);
          if (!dayTime) {
            theme.icon = (
              <MoonCloud
                className={theme.iconSize}
                moonColor={moonColor}
                cloudColor={iconColor}
              />
            );
            theme.background = bgClearNight;
          }
        }
      } else if (weatherId == 802) {
        // Nuages dispersés (25-50%)
        theme.icon = (
          <SunCloud
            size={theme.iconSize}
            sunColor={sunColor}
            cloudColor={iconColor}
          />
        );
        theme.background = bgBadWeatherLight;

        if (sunrise && sunset && hour) {
          const hourSunRise = new Date(sunrise * 1000).getHours();
          const hourSunset = new Date(sunset * 1000).getHours();
          const dayTime = isDay(hour, hourSunRise, hourSunset);
          if (!dayTime) {
            theme.icon = (
              <MoonCloud
                className={theme.iconSize}
                moonColor={moonColor}
                cloudColor={iconColor}
              />
            );
            theme.background = bgBadWeatherNight;
          }
        }
      } else if (weatherId == 803) {
        // Nuages morcelés (51-84%)
        theme.icon = <Cloud className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgBadWeather;

        if (sunrise && sunset && hour) {
          const hourSunRise = new Date(sunrise * 1000).getHours();
          const hourSunset = new Date(sunset * 1000).getHours();
          const dayTime = isDay(hour, hourSunRise, hourSunset);
          if (!dayTime) {
            theme.icon = (
              <MoonCloud
                className={theme.iconSize}
                moonColor={moonColor}
                cloudColor={iconColor}
              />
            );
            theme.background = bgBadWeatherNight;
          }
        }
      } else if (weatherId == 804) {
        // Ciel couvert (85-100%)
        theme.icon = <Cloud className={`${iconDarkColor} ${theme.iconSize}`} />;
        theme.background = bgBadWeather;

        if (sunrise && sunset && hour) {
          const hourSunRise = new Date(sunrise * 1000).getHours();
          const hourSunset = new Date(sunset * 1000).getHours();
          const dayTime = isDay(hour, hourSunRise, hourSunset);
          if (!dayTime) {
            theme.icon = (
              <MoonCloud
                className={theme.iconSize}
                moonColor={moonColor}
                cloudColor={iconDarkColor}
              />
            );
            theme.background = bgBadWeatherNight;
          }
        }
      } else {
        theme.icon = <Cloud className={`${iconColor} ${theme.iconSize}`} />;
        theme.background = bgBadWeatherLight;

        if (sunrise && sunset && hour) {
          const hourSunRise = new Date(sunrise * 1000).getHours();
          const hourSunset = new Date(sunset * 1000).getHours();
          const dayTime = isDay(hour, hourSunRise, hourSunset);
          if (!dayTime) {
            theme.icon = (
              <MoonCloud
                className={theme.iconSize}
                moonColor={moonColor}
                cloudColor={iconColor}
              />
            );
            theme.background = bgBadWeatherNight;
          }
        }
      }
      break;
  }
  if (sunrise && sunset) {
    const sunriseNow = new Date(sunrise * 1000).getHours();
    const sunsetNow = new Date(sunset * 1000).getHours();
    if (hour === sunriseNow) {
      theme.icon = <BsFillSunriseFill className={`size-8 fill-amber-500`} />;
    }
    if (hour === sunsetNow) {
      theme.icon = <BsFillSunsetFill className={`size-8 fill-amber-500`} />;
    }
  }
  return theme;
};

export default themeColor;
