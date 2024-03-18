import DefaultBlock from "../../ui/DefaultBlock";
import ForecastDay from "../../ui/ForecastDay";
import Subtitle from "../../ui/Subtitle";
import { RiCalendarTodoLine } from "react-icons/ri";

const DailyForecastBlock = () => {
  return (
    <DefaultBlock className="border border-slate-700 mt-6">
      <Subtitle
        icon={RiCalendarTodoLine}
        title="prévisions hebdomadaire"
        className="uppercase"
      />
      <ForecastDay />
    </DefaultBlock>
  );
};

export default DailyForecastBlock;
