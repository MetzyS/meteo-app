const Subtitle = (props: { title: string }) => {
  return (
    <div>
      <h2 className="text-slate-100 text-xs">{props.title}</h2>
      <hr className="mt-3 border-slate-700" />
    </div>
  );
};

export default Subtitle;
