import { Daily } from "../../../helpers/types";
import DefaultBlock from "../../ui/DefaultBlock";
import ForecastDay from "../../ui/ForecastDay";
import Subtitle from "../../ui/Subtitle";
import { RiCalendarTodoLine } from "react-icons/ri";

const DailyForecastBlock = (props: { data: Daily[] | undefined }) => {
  return (
    <>
      {props.data && (
        <DefaultBlock className="border border-slate-700 mt-6">
          <Subtitle
            icon={RiCalendarTodoLine}
            title="prévisions hebdomadaire"
            className="uppercase"
          />
          <ul className="flex flex-col mt-3">
            {props.data.map((item, index) => (
              <li
                key={index}
                className="flex font-semibold justify-between text-sm items-center py-1.5 hover:bg-slate-600/30 rounded-md cursor-default"
              >
                <ForecastDay data={item} index={index} />
              </li>
            ))}
          </ul>
        </DefaultBlock>
      )}
    </>
  );
};

export default DailyForecastBlock;
