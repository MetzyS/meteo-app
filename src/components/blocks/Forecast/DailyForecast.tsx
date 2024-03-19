import { Daily } from "../../../helpers/types";
import DefaultBlock from "../../ui/DefaultBlock";
import ForecastDay from "../../ui/ForecastDay";
import Subtitle from "../../ui/Subtitle";
import { RiCalendarTodoLine } from "react-icons/ri";

const DailyForecastBlock = (props: { data: Daily[] | undefined }) => {
  // console.log(props.data);
  return (
    <>
      {props.data && (
        <DefaultBlock className="border border-slate-700 mt-6">
          <Subtitle
            icon={RiCalendarTodoLine}
            title="prévisions hebdomadaire"
            className="uppercase"
          />
          <ul className="flex flex-col gap-3 my-4">
            {props.data.map((item, index) => (
              <li
                key={index}
                className="flex font-semibold justify-between text-sm items-center"
              >
                <ForecastDay data={item} />
              </li>
            ))}
          </ul>
        </DefaultBlock>
      )}
    </>
  );
};

export default DailyForecastBlock;
