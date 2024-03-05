const CountryTitle = (props: { country: string }) => {
  return (
    <span className="capitalize text-slate-100 font-semibold text-4xl">
      {props.country}
    </span>
  );
};

export default CountryTitle;
