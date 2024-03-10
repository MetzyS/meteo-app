const ForecastHourPlaceholder = () => {
  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  return (
    <>
      <div
        className={`h-fit backdrop-blur-3xl rounded-2xl shadow-md p-4 border border-slate-700 mt-6 select-none`}
      >
        <div>
          <h2 className="bg-slate-700 text-xs text-transparent rounded-xl leading-none h-4">
            Très nuageux. Averses faibles suivies de pluie.
          </h2>
          <hr className="mt-3 border-slate-700" />
        </div>
        <div className="flex my-2.5 overflow-x-scroll scrollbar-hide">
          {hours.map((_, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col gap-2.5 px-2.5 py-2.5 text-sm font-normal text-slate-500 items-center cursor-default justify-center">
                  <span className="bg-slate-700 text-xs text-transparent rounded-md px-1">
                    10
                  </span>
                  <span className="bg-slate-700 text-xs text-transparent rounded-md">
                    10°
                  </span>
                  <span className="block size-6 bg-slate-700 text-xs text-transparent rounded-md"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ForecastHourPlaceholder;
