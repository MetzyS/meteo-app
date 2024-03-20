import { useEffect } from "react";

const LineGauge = () => {
  //   useEffect(() => {
  //     let needles = document.querySelectorAll("[id^=gauge-]");
  //     for (let i = 0; i < needles.length; i++) {
  //       needles[i].classList.remove("stroke-blue-500");
  //       needles[i].classList.add("stroke-slate-500");
  //     }
  //     for (let i = 0; i < Math.floor(props.percent / 2) + 1; i++) {
  //       needles[i].classList.remove("stroke-slate-500");
  //       needles[i].classList.add("stroke-blue-500");
  //     }
  //   });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      width={70}
      //   height={10}
    >
      <g>
        <path d="M2 0v20" id="lineGauge-1" className="stroke-black" />
        <path d="M8 0v20" id="lineGauge-2" className="stroke-black" />
        <path d="M14 0v20" id="lineGauge-3" className="stroke-black" />
        <path d="M20 0v20" id="lineGauge-4" className="stroke-black" />
        <path d="M26 0v20" id="lineGauge-5" className="stroke-black" />
        <path d="M32 0v20" id="lineGauge-6" className="stroke-black" />
        <path d="M38 0v20" id="lineGauge-7" className="stroke-black" />
        <path d="M44 0v20" id="lineGauge-8" className="stroke-black" />
        <path d="M50 0v20" id="lineGauge-9" className="stroke-black" />
        <path d="M56 0v20" id="lineGauge-10" className="stroke-black" />
        <path d="M62 0v20" id="lineGauge-11" className="stroke-black" />
        <path d="M68 0v20" id="lineGauge-12" className="stroke-black" />
        <path d="M74 0v20" id="lineGauge-13" className="stroke-black" />
        <path d="M80 0v20" id="lineGauge-14" className="stroke-black" />
        <path d="M86 0v20" id="lineGauge-15" className="stroke-black" />
        <path d="M92 0v20" id="lineGauge-16" className="stroke-black" />
        <path d="M98 0v20" id="lineGauge-17" className="stroke-black" />
      </g>
    </svg>
  );
};

export default LineGauge;
