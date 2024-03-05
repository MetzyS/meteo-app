const Background = (props: { bg: string }) => {
  return (
    <div className={`background z-0 ${props.bg}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Background;
