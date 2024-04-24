import { useEffect, useState } from "react";
import Searchbar from "./components/navigation/Searchbar";
import HomepagePlaceholder from "./pages/HomepagePlaceholder";
import axios from "axios";
import Homepage from "./pages/Homepage";
import {
  CurrentWeatherDataType,
  ForecastWeatherDataType,
} from "./helpers/types";
import themeColor from "./helpers/themeColor";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherDataType>();
  const [forecastWeather, setForecastWeather] =
    useState<ForecastWeatherDataType>();
  const [city, setCity] = useState<string>("montpellier");
  const [summary, setSummary] = useState("");
  const [coord, setCoord] = useState({
    lat: 43.6,
    lon: 3.8,
    city: "montpellier",
  });
  // let bgColor = "";

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY_OPENWEATHERMAP;
    const forecastExcludeOptions = "minutely";
    const fetchData = async () => {
      const currentWeatherResult = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`
      );

      setCurrentWeather(currentWeatherResult.data);
      const COORDS = {
        lat: currentWeatherResult.data.coord.lat,
        lon: currentWeatherResult.data.coord.lon,
        city: city,
      };

      const forecastWeatherResult = await axios(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${COORDS.lat}&lon=${COORDS.lon}&exclude=${forecastExcludeOptions}&units=metric&lang=fr&appid=${apiKey}`
      );
      setForecastWeather(forecastWeatherResult.data);
      setSummary(forecastWeatherResult.data.daily[0].summary);
      setCoord(COORDS);
      setIsLoading(false);
      // bgColor = themeColor(
      //   forecastWeatherResult.data.daily[0].weather[0].id
      // ).background;
    };
    fetchData();
  }, [city]);
  return (
    <main className="min-h-screen p-4 bg-[#161E29] flex justify-center">
      {/* <main className={`min-h-screen p-4 ${bgColor}`}> */}
      <div className="backdrop-blur-md max-w-[1024px]">
        <Searchbar setCity={setCity} />
        {isLoading ? (
          <HomepagePlaceholder />
        ) : (
          <>
            <Homepage
              currentWeather={currentWeather}
              forecastWeather={forecastWeather}
              summary={summary}
              coord={coord}
              city={city}
            />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
