import CurrentWeatherBlock from "./components/blocks/CurrentWeatherBlock";
import Searchbar from "./components/navigation/Searchbar";

function App() {
  return (
    <main className="min-h-screen bg-slate-700 p-4">
      <Searchbar />
      <CurrentWeatherBlock className="mt-6" />
    </main>
  );
}

export default App;
