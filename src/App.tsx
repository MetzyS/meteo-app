import Background from "./components/background/Background";
import CurrentWeatherBlock from "./components/blocks/CurrentWeatherBlock";
import ForecastBlock from "./components/blocks/ForecastBlock";
import Searchbar from "./components/navigation/Searchbar";
import { hourlyTemps } from "./data/dummy";

function App() {
  return (
    <main className="min-h-screen p-4">
      <Background bg="bg-[#161E29]" />
      <div className="backdrop-blur-md">
        <Searchbar />
        <CurrentWeatherBlock className="mt-6 bg-cover bg-rain" />
        <ForecastBlock data={hourlyTemps} />
      </div>
    </main>
  );
}

export default App;
