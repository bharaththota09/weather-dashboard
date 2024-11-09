import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FavoriteComponent.css";

function FavoriteComponent({ setWeatherData, city }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const response = await axios.get("https://weather-dashboard-4mtz.onrender.com/favorites");
    setFavorites(response.data);
  };

  const addFavorite = async (city) => {
    if (!favorites.some((fav) => fav.city === city)) {
      await axios.post("https://weather-dashboard-4mtz.onrender.com/favorites", { city });
      fetchFavorites();
    }
  };
  const removeFavorite = async (id) => {
    await axios.delete(`https://weather-dashboard-4mtz.onrender.com/favorites/${id}`);
    fetchFavorites();
  };

  const fetchWeatherForFavorite = async (city) => {
    const apiKey = "d1f54ec840f0962cc2eae9b3355987b4";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    setWeatherData(response.data);
  };

  return (
    <div className="favorite-component">
      <h1>Favorite Cities</h1>
      <ul>
        {favorites.map((fav) => (
          <li key={fav.id}>
            <span>{fav.city}</span>
            <button
              onClick={() => fetchWeatherForFavorite(fav.city)}
              className="ShowWeather"
            >
              Show Weather
            </button>
            <button
              onClick={() => removeFavorite(fav.id)}
              className="DeleteButton"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => addFavorite(city)}
        disabled={!city}
        className="ShowWeather"
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default FavoriteComponent;
