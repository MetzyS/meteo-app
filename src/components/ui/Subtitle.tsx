const Subtitle = (props: { title: string; className?: string; icon?: any }) => {
  return (
    <div>
      <h2
        className={`text-slate-100 text-xs flex gap-2 items-center ${props.className}`}
      >
        {props.icon && <props.icon className="size-5 text-slate-500" />}
        {props.title}
      </h2>
      <hr className="mt-3 border-slate-700" />
    </div>
  );
};

export default Subtitle;
