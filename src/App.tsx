import { useEffect, useState } from "react";
import Background from "./components/background/Background";
import Searchbar from "./components/navigation/Searchbar";
import HomepagePlaceholder from "./pages/HomepagePlaceholder";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [city, setCity] = useState("montpellier");
  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const fetchData = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`
      );
      setData(result.data);
      console.log(data);
      setIsLoading(false);
    };
    fetchData();
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
            <span>FIN</span>
            {/* <Homepage data={hourlyTemps} /> */}
          </>
        )}
      </div>
    </main>
  );
}

export default App;
