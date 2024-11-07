import React from "react";
import { useState, useEffect } from "react";
import SearchComponent from "./components/SearchComponent";
import WeatherDisplayComponent from "./components/WeatherDisplayComponent";
import FavoriteComponent from "./components/FavoriteComponent";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    setLoading(true);
    const response = await axios.get("http://localhost:5000/favorites");
    if (response.data.length !== 0) {
      let initialCity = response.data[0].city;
      await fetchWeather(initialCity);
    } else {
      setLoading(false);
      console.log("No cities are in Favourites");
    }
  };

  const fetchWeather = async (city) => {
    try {
      const apiKey = "d1f54ec840f0962cc2eae9b3355987b4";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
      const response = await axios.get(url);
      setWeatherData(response.data);
      setLoading(false);
    } catch {
      console.log("Not Found");
    }
  };

  return (
    <div className="main">
      <SearchComponent setCity={setCity} setWeatherData={setWeatherData} />
      {loading && (
        <ThreeDots
          height={80}
          width={80}
          color="#3498db"
          ariaLabel="loading"
          visible={loading}
        />
      )}
      {weatherData && <WeatherDisplayComponent weatherData={weatherData} />}
      <FavoriteComponent setWeatherData={setWeatherData} city={city} />
    </div>
  );
}

export default App;
