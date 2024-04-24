const Newpage = (props: { weatherId: number }) => {
  let background = "bg-blue-500";
  switch (true) {
    case props.weatherId >= 200 && props.weatherId <= 233:
      // Orage
      background = "bg-neutral-300";
    case props.weatherId >= 300 && props.weatherId <= 321:
    // Bruine (pluie fine)
    default:
      background = "bg-neutral-300";
  }
  return (
    <div className={`${background}`}>
      <span>newpage</span>
    </div>
  );
};

export default Newpage;
