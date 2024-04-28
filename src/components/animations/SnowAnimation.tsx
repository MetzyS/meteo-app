import AnimationInterface from "../../helpers/animationType";

const SnowAnimation = () => {
  let snowflakeCount: number = 25;
  let snowflakes: AnimationInterface[] = [];
  for (let i = 0; i < snowflakeCount; i++) {
    const left = `calc(${Math.floor(Math.random() * 100).toString()} * 1%)`;
    const top = `calc(${Math.floor(
      Math.random() * 100
    ).toString()}) + 50) * - 1px`;
    const opacity = Math.random().toFixed(2).toString();
    const duration = `calc(${(Math.random() + 0.5)
      .toFixed(2)
      .toString()} * 4s)`;
    const delay = `calc(${(Math.random() * 2 - 1).toString()}) * 1s`;
    const scale = (Math.random() * 1.5).toFixed(2).toString();

    let snowflake = {
      aspect: "xMinYMin",
      viewBox: "0 0 24 24",
      left: left,
      top: top,
      opacity: opacity,
      duration: duration,
      delay: delay,
      scale: scale,
      path: "M12 2v16m0 4v-4m0 0 3 3m-3-3-3 3m6-18-3 3-3-3M3 7l4 2m0 0 10 6M7 9 6 5m1 4-4 1m14 5 4 2m-4-2 4-1m-4 1 1 4M21 7l-4 2m0 0L7 15m10-6 1-4m-1 4 4 1M7 15l-4 2m4-2-4-1m4 1-1 4",
    };
    snowflakes.push(snowflake);
  }
  return (
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden opacity-50 ">
      {snowflakes.map((snowflake, index) => (
        <svg
          fill="none"
          preserveAspectRatio={snowflake.aspect}
          viewBox={snowflake.viewBox}
          style={{
            animationDelay: snowflake.delay,
            animationDuration: snowflake.duration,
            animationIterationCount: "infinite",
            animationName: "weather",
            animationTimingFunction: "linear",
            height: 35,
            position: "absolute",
            left: snowflake.left,
            top: snowflake.top,
            transform: `scale(${snowflake.scale})`,
          }}
          key={`snowflake-${index}`}
        >
          <path
            stroke="white"
            strokeLinecap="round"
            strokeWidth="1.5"
            fill="none"
            opacity={snowflake.opacity}
            d={snowflake.path}
          />
        </svg>
      ))}
    </div>
  );
};

export default SnowAnimation;
