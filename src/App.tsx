import { useState, useEffect } from "react";
import Background from "./components/background/Background";
import Searchbar from "./components/navigation/Searchbar";
import { fetchParams } from "./data/dummy";
import { hourlyTemps } from "./data/dummy";
import Homepage from "./pages/Homepage";
import HomepagePlaceholder from "./pages/HomepagePlaceholder";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const params = fetchParams(53, 48);
    setTimeout(() => {
      setIsLoading(false);
      return;
    }, 2000);
  }, []);
  return (
    <main className="min-h-screen p-4">
      <Background bg="bg-[#161E29]" />
      <div className="backdrop-blur-md">
        <Searchbar />
        {isLoading ? (
          <HomepagePlaceholder />
        ) : (
          <>
            <Homepage data={hourlyTemps} />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
