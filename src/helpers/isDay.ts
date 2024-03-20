const isDay = (hour: number, sunrise: number, sunset: number) => {
  return hour >= sunrise && hour < sunset;
};

export default isDay;
