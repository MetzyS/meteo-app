import { useEffect, useState } from "react";
import Background from "./components/background/Background";
import Searchbar from "./components/navigation/Searchbar";
import HomepagePlaceholder from "./pages/HomepagePlaceholder";
import axios from "axios";
import Homepage from "./pages/Homepage";
import {
  CurrentWeatherDataType,
  ForecastWeatherDataType,
} from "./helpers/types";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherDataType>();
  const [forecastWeather, setForecastWeather] =
    useState<ForecastWeatherDataType>();
  const [city, setCity] = useState<string>("montpellier");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY_OPENWEATHERMAP;
    const apiKeyDeepl = import.meta.env.VITE_API_KEY_DEEPL;
    const forecastExcludeOptions = "minutely";
    const fetchData = async () => {
      const currentWeatherResult = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`
      );
      // console.log(currentWeatherResult.data);

      setCurrentWeather(currentWeatherResult.data);
      const lat = currentWeatherResult.data.coord.lat;
      const lon = currentWeatherResult.data.coord.lon;

      const forecastWeatherResult = await axios(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${forecastExcludeOptions}&units=metric&lang=fr&appid=${apiKey}`
      );
      console.log(forecastWeatherResult.data);
      setForecastWeather(forecastWeatherResult.data);
      setSummary(forecastWeatherResult.data.daily[0].summary);
      setIsLoading(false);
    };
    fetchData();
  }, [city]);
  return (
    <main className="min-h-screen p-4 bg-[#161E29]">
      <Background bg="bg-[#161E29]" />
      <div className="backdrop-blur-md">
        <Searchbar setCity={setCity} />
        {isLoading ? (
          <HomepagePlaceholder />
        ) : (
          <>
            {/* <span>FIN</span> */}
            <Homepage
              currentWeather={currentWeather}
              forecastWeather={forecastWeather}
              summary={summary}
            />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
