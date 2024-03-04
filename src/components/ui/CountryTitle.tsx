const CountryTitle = (props: { country: string }) => {
  return (
    <span className="capitalize text-neutral-700 font-semibold text-2xl">
      {props.country}
    </span>
  );
};

export default CountryTitle;
