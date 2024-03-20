const MoonCloud = (props: {
  className?: string;
  cloudColor: string;
  moonColor: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={props.className}
    >
      <path
        d="m119 134 3-12a22 22 0 0 0-37-16c-6-10-17-17-29-17-19 0-34 15-34 33l1 2a33 33 0 0 0 10 65h84c15 0 27-13 27-28 0-14-11-26-25-27z"
        className={props.cloudColor}
      />
      <title>Lune ennuagée</title>
      <path
        d="M196 115a52 52 0 0 1-35-97c2-1 2-5-1-6l-12-1a67 67 0 0 0-66 76l5 4 13-2a33 33 0 0 1 33 37c8 4 15 10 19 18 19-1 36-10 47-24 2-2 0-6-3-5z"
        className={props.moonColor}
      />
    </svg>
  );
};

export default MoonCloud;
