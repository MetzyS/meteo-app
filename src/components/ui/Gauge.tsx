import { useEffect } from "react";

const Gauge = (props: {
  percent: number;
  width?: number;
  height?: number;
  className?: string;
}) => {
  useEffect(() => {
    let needles = document.querySelectorAll("[id^=gauge-]");
    for (let i = 0; i < needles.length; i++) {
      needles[i].classList.remove("stroke-blue-500");
      needles[i].classList.add("stroke-slate-500");
    }
    for (let i = 0; i < Math.floor(props.percent / 2) + 1; i++) {
      needles[i].classList.remove("stroke-slate-500");
      needles[i].classList.add("stroke-blue-500");
    }
  });
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="25 0 90 90"
      className={`-rotate-90 -scale-y-100 ${props.className} aspect-square w-32`}
      data-percent="50"
    >
      <defs>
        <filter
          id="luminosity-noclip"
          x="0"
          y="0"
          width="90"
          height="90"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodColor="white" result="bg" />
          <feBlend in="SourceGraphic" in2="bg" />
        </filter>
        <mask
          id="mask"
          x="0"
          y="0"
          width="90"
          height="90"
          maskUnits="userSpaceOnUse"
        >
          <g filter="url(#luminosity-noclip)">
            <circle cx="45" cy="45" r="39.58" strokeWidth={0} />
          </g>
        </mask>
      </defs>
      <g mask="url(#mask)">
        <line
          x1="45"
          y1="45"
          x2="45"
          y2="90"
          className="transition-all duration-500"
          id="gauge-01"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="47.83"
          y2="89.91"
          className="transition-all duration-500"
          id="gauge-02"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="50.64"
          y2="89.65"
          className="transition-all duration-500"
          id="gauge-03"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="53.43"
          y2="89.2"
          className="transition-all duration-500"
          id="gauge-04"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="56.19"
          y2="88.59"
          className="transition-all duration-500"
          id="gauge-05"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="58.91"
          y2="87.8"
          className="transition-all duration-500"
          id="gauge-06"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="61.57"
          y2="86.84"
          className="transition-all duration-500"
          id="gauge-07"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="64.16"
          y2="85.72"
          className="transition-all duration-500"
          id="gauge-08"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="66.68"
          y2="84.43"
          className="transition-all duration-500"
          id="gauge-09"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="69.11"
          y2="82.99"
          className="transition-all duration-500"
          id="gauge-10"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="71.45"
          y2="81.41"
          className="transition-all duration-500"
          id="gauge-11"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="73.68"
          y2="79.67"
          className="transition-all duration-500"
          id="gauge-12"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="75.8"
          y2="77.8"
          className="transition-all duration-500"
          id="gauge-13"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="77.8"
          y2="75.8"
          className="transition-all duration-500"
          id="gauge-14"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="79.67"
          y2="73.68"
          className="transition-all duration-500"
          id="gauge-15"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="81.41"
          y2="71.45"
          className="transition-all duration-500"
          id="gauge-16"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="82.99"
          y2="69.11"
          className="transition-all duration-500"
          id="gauge-17"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="84.43"
          y2="66.68"
          className="transition-all duration-500"
          id="gauge-18"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="85.72"
          y2="64.16"
          className="transition-all duration-500"
          id="gauge-19"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="86.84"
          y2="61.57"
          className="transition-all duration-500"
          id="gauge-20"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="87.8"
          y2="58.91"
          className="transition-all duration-500"
          id="gauge-21"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="88.59"
          y2="56.19"
          className="transition-all duration-500"
          id="gauge-22"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="89.2"
          y2="53.43"
          className="transition-all duration-500"
          id="gauge-23"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="89.65"
          y2="50.64"
          className="transition-all duration-500"
          id="gauge-24"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="89.91"
          y2="47.83"
          className="transition-all duration-500"
          id="gauge-25"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="90"
          y2="45"
          className="transition-all duration-500"
          id="gauge-26"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="89.91"
          y2="42.17"
          className="transition-all duration-500"
          id="gauge-27"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="89.65"
          y2="39.36"
          className="transition-all duration-500"
          id="gauge-28"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="89.2"
          y2="36.57"
          className="transition-all duration-500"
          id="gauge-29"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="88.59"
          y2="33.81"
          className="transition-all duration-500"
          id="gauge-30"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="87.8"
          y2="31.09"
          className="transition-all duration-500"
          id="gauge-31"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="86.84"
          y2="28.43"
          className="transition-all duration-500"
          id="gauge-32"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="85.72"
          y2="25.84"
          className="transition-all duration-500"
          id="gauge-33"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="84.43"
          y2="23.32"
          className="transition-all duration-500"
          id="gauge-34"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="82.99"
          y2="20.89"
          className="transition-all duration-500"
          id="gauge-35"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="81.41"
          y2="18.55"
          className="transition-all duration-500"
          id="gauge-36"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="79.67"
          y2="16.32"
          className="transition-all duration-500"
          id="gauge-37"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="77.8"
          y2="14.2"
          className="transition-all duration-500"
          id="gauge-38"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="75.8"
          y2="12.2"
          className="transition-all duration-500"
          id="gauge-39"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="73.68"
          y2="10.33"
          className="transition-all duration-500"
          id="gauge-40"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="71.45"
          y2="8.59"
          className="transition-all duration-500"
          id="gauge-41"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="69.11"
          y2="7.01"
          className="transition-all duration-500"
          id="gauge-42"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="66.68"
          y2="5.57"
          className="transition-all duration-500"
          id="gauge-43"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="64.16"
          y2="4.28"
          className="transition-all duration-500"
          id="gauge-44"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="61.57"
          y2="3.16"
          className="transition-all duration-500"
          id="gauge-45"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="58.91"
          y2="2.2"
          className="transition-all duration-500"
          id="gauge-46"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="56.19"
          y2="1.41"
          className="transition-all duration-500"
          id="gauge-47"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="53.43"
          y2=".8"
          className="transition-all duration-500"
          id="gauge-48"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="50.64"
          y2=".35"
          className="transition-all duration-500"
          id="gauge-49"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="47.83"
          y2=".09"
          className="transition-all duration-500"
          id="gauge-50"
          strokeMiterlimit={10}
        />
      </g>
    </svg>
  );
};

export default Gauge;
