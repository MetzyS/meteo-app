import HeavyRain from "./customicons/HeavyRain";
const ForecastDay = () => {
  return (
    <li className="flex font-semibold justify-between text-sm items-center">
      <span className="text-white">Today</span>
      <span>
        <HeavyRain
          size="size-6"
          cloudColor="fill-white"
          rainColor="fill-blue-300"
        />
      </span>
      <span className="text-slate-400">23%</span>
      <span className="text-slate-400">5°</span>
      <span className="text-blue-600">BLABLA</span>
      <span className="text-white">6°</span>
    </li>
  );
};

export default ForecastDay;
