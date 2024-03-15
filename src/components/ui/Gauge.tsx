import { useEffect } from "react";

const Gauge = (props: { percent: number; width: number; height: number }) => {
  useEffect(() => {
    let needles = document.querySelectorAll("[id^=gauge-]");
    // console.log(needles);
    for (let i = 0; i < Math.floor(props.percent / 2) + 1; i++) {
      needles[i].classList.remove("stroke-white");
      needles[i].classList.add("stroke-purple-500");
    }
  }, [props.percent]);
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="25 0 90 90"
      width={props.width}
      height={props.height}
      className="-rotate-90 -scale-y-100"
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
          className="fill-none stroke-white"
          id="gauge-01"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="47.83"
          y2="89.91"
          className="fill-none stroke-white"
          id="gauge-02"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="50.64"
          y2="89.65"
          className="fill-none stroke-white"
          id="gauge-03"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="53.43"
          y2="89.2"
          className="fill-none stroke-white"
          id="gauge-04"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="56.19"
          y2="88.59"
          className="fill-none stroke-white"
          id="gauge-05"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="58.91"
          y2="87.8"
          className="fill-none stroke-white"
          id="gauge-06"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="61.57"
          y2="86.84"
          className="fill-none stroke-white"
          id="gauge-07"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="64.16"
          y2="85.72"
          className="fill-none stroke-white"
          id="gauge-08"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="66.68"
          y2="84.43"
          className="fill-none stroke-white"
          id="gauge-09"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="69.11"
          y2="82.99"
          className="fill-none stroke-white"
          id="gauge-10"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="71.45"
          y2="81.41"
          className="fill-none stroke-white"
          id="gauge-11"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="73.68"
          y2="79.67"
          className="fill-none stroke-white"
          id="gauge-12"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="75.8"
          y2="77.8"
          className="fill-none stroke-white"
          id="gauge-13"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="77.8"
          y2="75.8"
          className="fill-none stroke-white"
          id="gauge-14"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="79.67"
          y2="73.68"
          className="fill-none stroke-white"
          id="gauge-15"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="81.41"
          y2="71.45"
          className="fill-none stroke-white"
          id="gauge-16"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="82.99"
          y2="69.11"
          className="fill-none stroke-white"
          id="gauge-17"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="84.43"
          y2="66.68"
          className="fill-none stroke-white"
          id="gauge-18"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="85.72"
          y2="64.16"
          className="fill-none stroke-white"
          id="gauge-19"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="86.84"
          y2="61.57"
          className="fill-none stroke-white"
          id="gauge-20"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="87.8"
          y2="58.91"
          className="fill-none stroke-white"
          id="gauge-21"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="88.59"
          y2="56.19"
          className="fill-none stroke-white"
          id="gauge-22"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="89.2"
          y2="53.43"
          className="fill-none stroke-white"
          id="gauge-23"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="89.65"
          y2="50.64"
          className="fill-none stroke-white"
          id="gauge-24"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="89.91"
          y2="47.83"
          className="fill-none stroke-white"
          id="gauge-25"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="90"
          y2="45"
          className="fill-none stroke-white"
          id="gauge-26"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="89.91"
          y2="42.17"
          className="fill-none stroke-white"
          id="gauge-27"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="89.65"
          y2="39.36"
          className="fill-none stroke-white"
          id="gauge-28"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="89.2"
          y2="36.57"
          className="fill-none stroke-white"
          id="gauge-29"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="88.59"
          y2="33.81"
          className="fill-none stroke-white"
          id="gauge-30"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="87.8"
          y2="31.09"
          className="fill-none stroke-white"
          id="gauge-31"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="86.84"
          y2="28.43"
          className="fill-none stroke-white"
          id="gauge-32"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="85.72"
          y2="25.84"
          className="fill-none stroke-white"
          id="gauge-33"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="84.43"
          y2="23.32"
          className="fill-none stroke-white"
          id="gauge-34"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="82.99"
          y2="20.89"
          className="fill-none stroke-white"
          id="gauge-35"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="81.41"
          y2="18.55"
          className="fill-none stroke-white"
          id="gauge-36"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="79.67"
          y2="16.32"
          className="fill-none stroke-white"
          id="gauge-37"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="77.8"
          y2="14.2"
          className="fill-none stroke-white"
          id="gauge-38"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="75.8"
          y2="12.2"
          className="fill-none stroke-white"
          id="gauge-39"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="73.68"
          y2="10.33"
          className="fill-none stroke-white"
          id="gauge-40"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="71.45"
          y2="8.59"
          className="fill-none stroke-white"
          id="gauge-41"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="69.11"
          y2="7.01"
          className="fill-none stroke-white"
          id="gauge-42"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="66.68"
          y2="5.57"
          className="fill-none stroke-white"
          id="gauge-43"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="64.16"
          y2="4.28"
          className="fill-none stroke-white"
          id="gauge-44"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="61.57"
          y2="3.16"
          className="fill-none stroke-white"
          id="gauge-45"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="58.91"
          y2="2.2"
          className="fill-none stroke-white"
          id="gauge-46"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="56.19"
          y2="1.41"
          className="fill-none stroke-white"
          id="gauge-47"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="53.43"
          y2=".8"
          className="fill-none stroke-white"
          id="gauge-48"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="50.64"
          y2=".35"
          className="fill-none stroke-white"
          id="gauge-49"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="47.83"
          y2=".09"
          className="fill-none stroke-white"
          id="gauge-50"
          strokeMiterlimit={10}
        />
        {/* <line
          x1="45"
          y1="45"
          x2="45"
          className="fill-none stroke-white" id="gauge-51"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="42.17"
          y2=".09"
          className="fill-none stroke-white" id="gauge-52"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="39.36"
          y2=".35"
          className="fill-none stroke-white" id="gauge-53"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="36.57"
          y2=".8"
          className="fill-none stroke-white" id="gauge-54"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="33.81"
          y2="1.41"
          className="fill-none stroke-white" id="gauge-55"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="31.09"
          y2="2.2"
          className="fill-none stroke-white" id="gauge-56"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="28.43"
          y2="3.16"
          className="fill-none stroke-white" id="gauge-57"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="25.84"
          y2="4.28"
          className="fill-none stroke-white" id="gauge-58"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="23.32"
          y2="5.57"
          className="fill-none stroke-white" id="gauge-59"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="20.89"
          y2="7.01"
          className="fill-none stroke-white" id="gauge-60"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="18.55"
          y2="8.59"
          className="fill-none stroke-white" id="gauge-61"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="16.32"
          y2="10.33"
          className="fill-none stroke-white" id="gauge-62"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="14.2"
          y2="12.2"
          className="fill-none stroke-white" id="gauge-63"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="12.2"
          y2="14.2"
          className="fill-none stroke-white" id="gauge-64"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="10.33"
          y2="16.32"
          className="fill-none stroke-white" id="gauge-65"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="8.59"
          y2="18.55"
          className="fill-none stroke-white" id="gauge-66"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="7.01"
          y2="20.89"
          className="fill-none stroke-white" id="gauge-67"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="5.57"
          y2="23.32"
          className="fill-none stroke-white" id="gauge-68"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="4.28"
          y2="25.84"
          className="fill-none stroke-white" id="gauge-69"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="3.16"
          y2="28.43"
          className="fill-none stroke-white" id="gauge-70"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="2.2"
          y2="31.09"
          className="fill-none stroke-white" id="gauge-71"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="1.41"
          y2="33.81"
          className="fill-none stroke-white" id="gauge-72"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2=".8"
          y2="36.57"
          className="fill-none stroke-white" id="gauge-73"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2=".35"
          y2="39.36"
          className="fill-none stroke-white" id="gauge-74"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2=".09"
          y2="42.17"
          className="fill-none stroke-white" id="gauge-75"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          y2="45"
          className="fill-none stroke-white" id="gauge-76"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2=".09"
          y2="47.83"
          className="fill-none stroke-white" id="gauge-77"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2=".35"
          y2="50.64"
          className="fill-none stroke-white" id="gauge-78"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2=".8"
          y2="53.43"
          className="fill-none stroke-white" id="gauge-79"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="1.41"
          y2="56.19"
          className="fill-none stroke-white" id="gauge-80"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="2.2"
          y2="58.91"
          className="fill-none stroke-white" id="gauge-81"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="3.16"
          y2="61.57"
          className="fill-none stroke-white" id="gauge-82"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="4.28"
          y2="64.16"
          className="fill-none stroke-white" id="gauge-83"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="5.57"
          y2="66.68"
          className="fill-none stroke-white" id="gauge-84"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="7.01"
          y2="69.11"
          className="fill-none stroke-white" id="gauge-85"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="8.59"
          y2="71.45"
          className="fill-none stroke-white" id="gauge-86"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="10.33"
          y2="73.68"
          className="fill-none stroke-white" id="gauge-87"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="12.2"
          y2="75.8"
          className="fill-none stroke-white" id="gauge-88"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="14.2"
          y2="77.8"
          className="fill-none stroke-white" id="gauge-89"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="16.32"
          y2="79.67"
          className="fill-none stroke-white" id="gauge-90"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="18.55"
          y2="81.41"
          className="fill-none stroke-white" id="gauge-91"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="20.89"
          y2="82.99"
          className="fill-none stroke-white" id="gauge-92"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="23.32"
          y2="84.43"
          className="fill-none stroke-white" id="gauge-93"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="25.84"
          y2="85.72"
          className="fill-none stroke-white" id="gauge-94"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="28.43"
          y2="86.84"
          className="fill-none stroke-white" id="gauge-95"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="31.09"
          y2="87.8"
          className="fill-none stroke-white" id="gauge-96"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="33.81"
          y2="88.59"
          className="fill-none stroke-white" id="gauge-97"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="36.57"
          y2="89.2"
          className="fill-none stroke-white" id="gauge-98"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="39.36"
          y2="89.65"
          className="fill-none stroke-white" id="gauge-99"
          strokeMiterlimit={10}
        />
        <line
          x1="45"
          y1="45"
          x2="42.17"
          y2="89.91"
          className="fill-none stroke-white" id="gauge-100"
          strokeMiterlimit={10}
        /> */}
      </g>
    </svg>
  );
};

export default Gauge;
