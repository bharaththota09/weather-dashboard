import React, { useState } from "react";
import axios from "axios";

function SearchComponent({ setCity, setWeatherData }) {
  const [input, setInput] = useState("");
  const [showErr, setShowErr] = useState(false);
  const fetchWeather = async () => {
    try {
      const apiKey = "d1f54ec840f0962cc2eae9b3355987b4";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=${apiKey}`;
      const response = await axios.get(url);
      setWeatherData(response.data);
      setCity(input);
      setShowErr(false);
    } catch {
      setShowErr(true);
      setWeatherData(null);
    }
  };

  return (
    <div className="search-component">
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>
      {showErr ? <h1 style={{ color: "red" }}>City Not Found</h1> : ""}
    </div>
  );
}

export default SearchComponent;
