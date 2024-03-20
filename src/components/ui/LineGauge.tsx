import { useEffect } from "react";

const LineGauge = (props: { percent: number; index: number }) => {
  useEffect(() => {
    let needles = document.querySelectorAll(`[id^=lineGauge-${props.index}-]`);
    for (let i = 0; i < needles.length; i++) {
      needles[i].classList.remove("stroke-blue-500");
      needles[i].classList.add("stroke-slate-600");
    }
    console.log(needles.length);
    for (
      let i = 0;
      i < Math.floor(needles.length * (props.percent / 100)) + 1;
      i++
    ) {
      needles[i].classList.remove("stroke-slate-600");
      needles[i].classList.add("stroke-blue-500");
    }
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      width={115}
      //   height={10}
    >
      <g>
        <path
          d="M2 0v20"
          id={`lineGauge-${props.index}-1`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M8 0v20"
          id={`lineGauge-${props.index}-2`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M14 0v20"
          id={`lineGauge-${props.index}-3`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M20 0v20"
          id={`lineGauge-${props.index}-4`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M26 0v20"
          id={`lineGauge-${props.index}-5`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M32 0v20"
          id={`lineGauge-${props.index}-6`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M38 0v20"
          id={`lineGauge-${props.index}-7`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M44 0v20"
          id={`lineGauge-${props.index}-8`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M50 0v20"
          id={`lineGauge-${props.index}-9`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M56 0v20"
          id={`lineGauge-${props.index}-10`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M62 0v20"
          id={`lineGauge-${props.index}-11`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M68 0v20"
          id={`lineGauge-${props.index}-12`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M74 0v20"
          id={`lineGauge-${props.index}-13`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M80 0v20"
          id={`lineGauge-${props.index}-14`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M86 0v20"
          id={`lineGauge-${props.index}-15`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M92 0v20"
          id={`lineGauge-${props.index}-16`}
          className="stroke-slate-600 stroke-2"
        />
        <path
          d="M98 0v20"
          id={`lineGauge-${props.index}-17`}
          className="stroke-slate-600 stroke-2"
        />
      </g>
    </svg>
  );
};

export default LineGauge;
