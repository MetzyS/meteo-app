const CurrentWeatherPlaceholder = () => {
  return (
    <div
      className={`h-fit bg-slate-800 mt-6 rounded-2xl shadow-md p-4 select-none`}
    >
      <span className="capitalize text-transparent font-semibold text-4xl bg-slate-700 rounded-xl">
        Paris
      </span>
      <div className="flex justify-between text-transparent tracking-wide">
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-normal bg-slate-700 rounded-xl mt-2 w-fit">
            20°
          </span>
          <span className="text-sm bg-slate-700 rounded-xl">Pluvieux</span>
          <p className="text-sm font-light flex gap-2">
            <span className="bg-slate-700 rounded-xl">Max: 21°C</span>
            <span className="bg-slate-700 rounded-xl">Min: 12°C</span>
          </p>
          <p className="text-sm font-light bg-slate-700 rounded-xl">
            05 Mars 2024 15:14
          </p>
        </div>
        <div className="flex items-end">
          <span className="size-16 bg-slate-700 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherPlaceholder;
