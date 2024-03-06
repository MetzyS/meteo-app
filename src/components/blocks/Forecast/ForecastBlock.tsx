import DefaultBlock from "../../ui/DefaultBlock";
import ForecastHour from "../../ui/ForecastHour";
import Subtitle from "../../ui/Subtitle";

const ForecastBlock = (props: {
  data: [
    {
      hour: string;
      temp: string;
      icon: string;
    }
  ];
}) => {
  return (
    <DefaultBlock className="border border-slate-700 mt-6">
      <Subtitle title="Très nuageux. Averses faibles suivies de pluie." />
      <div className="flex my-2 overflow-x-scroll scrollbar-hide">
        {props.data.map((item, index) => (
          <ForecastHour data={item} key={index} />
        ))}
      </div>
    </DefaultBlock>
  );
};

export default ForecastBlock;