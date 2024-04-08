interface Drops {
  aspect: string;
  viewBox: string;
  left: string;
  top: string;
  opacity: string;
  duration: string;
  delay: string;
  scale: string;
  path: string;
}

const RainAnimation = (props: { intensity?: string }) => {
  let droplets: number;
  switch (props.intensity) {
    case "heavy":
      droplets = 100;
      break;
    case "normal":
      droplets = 50;
      break;
    case "light":
      droplets = 10;
      break;
    default:
      droplets = 50;
  }
  let drops: Drops[] = [];
  for (let i = 0; i < droplets; i++) {
    const left = `calc(${Math.floor(Math.random() * 100).toString()} * 1%)`;
    const top = `calc(${Math.floor(
      Math.random() * 100
    ).toString()}) + 50) * - 1px`;
    const opacity = Math.random().toFixed(2).toString();
    const duration = `calc(${(Math.random() + 0.5)
      .toFixed(2)
      .toString()} * 1s)`;
    const delay = `calc(${(Math.random() * 2 - 1).toString()}) * 1s`;
    const scale = `scaleY(calc(${Math.random().toFixed(2).toString()} * 1.5))`;

    let drop = {
      aspect: "xMinYMin",
      viewBox: "0 0 5 50",
      left: left,
      top: top,
      opacity: opacity,
      duration: duration,
      delay: delay,
      scale: scale,
      path: "M 2.5,0 C 2.6949458,3.5392017 3.344765,20.524571 4.4494577,30.9559 5.7551357,42.666753 4.5915685,50 2.5,50 0.40843152,50 -0.75513565,42.666753 0.55054234,30.9559 1.655235,20.524571 2.3050542,3.5392017 2.5,0 Z",
    };
    drops.push(drop);
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden opacity-30">
      {drops.map((drop) => (
        <svg
          preserveAspectRatio={drop.aspect}
          viewBox={drop.viewBox}
          style={{
            animationDelay: drop.delay,
            animationDuration: drop.duration,
            animationIterationCount: "infinite",
            animationName: "drop",
            animationTimingFunction: "linear",
            height: 35,
            position: "absolute",
            left: drop.left,
            top: drop.top,
          }}
        >
          <path
            stroke="none"
            fill="#a1c6cc"
            opacity={drop.opacity}
            transform={drop.scale}
            d={drop.path}
          />
        </svg>
      ))}
    </div>
  );
};

export default RainAnimation;
