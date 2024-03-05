import Background from "./components/background/Background";
import CurrentWeatherBlock from "./components/blocks/CurrentWeatherBlock";
import Searchbar from "./components/navigation/Searchbar";

function App() {
  return (
    <main className="min-h-screen p-4">
      <Background bg="bg-[#161E29]" />
      <div className="backdrop-blur-md">
        <Searchbar />
        <CurrentWeatherBlock className="mt-6 bg-cover bg-rain" />
      </div>
    </main>
  );
}

export default App;
