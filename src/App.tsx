import { useEffect, useState } from "react";
import Background from "./components/background/Background";
import Searchbar from "./components/navigation/Searchbar";
import HomepagePlaceholder from "./pages/HomepagePlaceholder";
import axios from "axios";
import Homepage from "./pages/Homepage";
import { WeatherDataType } from "./helpers/types";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<WeatherDataType>();
  const [city, setCity] = useState<string>("montpellier");

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const fetchData = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`
      );
      setData(result.data);
      console.log(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [city]);
  return (
    <main className="min-h-screen p-4">
      <Background bg="bg-[#161E29]" />
      <div className="backdrop-blur-md">
        <Searchbar setCity={setCity} />
        {isLoading ? (
          <HomepagePlaceholder />
        ) : (
          <>
            {/* <span>FIN</span> */}
            <Homepage data={data} />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
