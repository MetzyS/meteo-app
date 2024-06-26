import AnimationInterface from "../../helpers/animationType";

const ThunderAnimation = () => {
  let thunderCount: number = 6;
  let thunders: AnimationInterface[] = [];
  for (let i = 0; i < thunderCount; i++) {
    const left = `calc(${Math.floor(Math.random() * 100).toString()} * 1%)`;
    const top = "0";
    const opacity = Math.random().toFixed(2).toString();
    const duration = `calc((${Math.random()
      .toFixed(2)
      .toString()} + 0.3) * 2.5s)`;
    const delay = `calc(${(Math.random() * 2 - 1).toString()}) * 1s`;
    const scale = (Math.random() * 0.9).toFixed(2).toString();
    const height = `${Math.random() * 600}px`;

    let thunder = {
      aspect: "xMinYMin",
      viewBox: "0 0 192 928",
      left: left,
      top: top,
      opacity: opacity,
      duration: duration,
      delay: delay,
      scale: scale,
      path: "M144 3 83 265l38-24-34 139 81-82-69 307-26-26L0 928l77-328 29 28 86-362-89 86 36-136-37 23L179 0l-35 3z",
      height: height,
    };
    thunders.push(thunder);
  }
  return (
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden opacity-50 ">
      {thunders.map((thunder, index) => (
        <svg
          fill="none"
          preserveAspectRatio={thunder.aspect}
          viewBox={thunder.viewBox}
          style={{
            animationDelay: thunder.delay,
            animationDuration: thunder.duration,
            animationIterationCount: "infinite",
            animationName: "thunder",
            animationTimingFunction: "linear",
            height: thunder.height,
            position: "absolute",
            left: thunder.left,
            top: thunder.top,
            transform: `scale(${thunder.scale})`,
            transformOrigin: "top center",
            filter: "blur(2px) drop-shadow(5px 5px 20px aqua)",
          }}
          key={`thunde-${index}`}
        >
          <path
            stroke="none"
            fill="white"
            opacity={thunder.opacity}
            d={thunder.path}
          />
        </svg>
      ))}
    </div>
  );
};

export default ThunderAnimation;
