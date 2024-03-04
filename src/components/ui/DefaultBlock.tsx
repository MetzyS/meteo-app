import { ReactElement } from "react";

const DefaultBlock = (props: {
  children: ReactElement[];
  className?: string;
}) => {
  return (
    <div
      className={`h-fit bg-neutral-100/70 backdrop-blur-3xl rounded-md shadow-md p-4 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default DefaultBlock;
