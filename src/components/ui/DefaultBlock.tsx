import { ReactElement } from "react";

const DefaultBlock = (props: {
  children: ReactElement[] | ReactElement;
  className?: string;
}) => {
  return (
    <div
      className={`h-fit backdrop-blur-3xl rounded-2xl shadow-md p-4 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default DefaultBlock;
