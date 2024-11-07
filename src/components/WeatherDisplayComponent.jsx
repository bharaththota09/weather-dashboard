import React from "react";
import "./WeatherDisplayComponent.css";
function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
function WeatherDisplayComponent({ weatherData }) {
  const today = new Date().toLocaleDateString();
  const dailyForecast = weatherData.list.reduce((acc, item) => {
    const date = new Date(item.dt_txt).toLocaleDateString();

    if (date !== today && !acc[date]) {
      acc[date] = item;
    }
    return acc;
  }, {});

  const filteredForecast = Object.values(dailyForecast);

  return (
    <div className="weather-display">
      <h1>{weatherData.city.name}</h1>
      <h3>
        {new Date(weatherData.list[0].dt_txt).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h3>
      <div className="temperature">
        <h1>{Math.round(weatherData.list[0].main.temp)}°C</h1>
        <h3 className="description">
          {toTitleCase(weatherData.list[0].weather[0].description)}
        </h3>
      </div>
      <h3>5-Day Forecast</h3>
      <ul>
        {filteredForecast.map((item, index) => (
          <li key={index} className="listItems">
            <p className="date">
              {new Date(item.dt_txt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p className="temp"> {Math.round(item.main.temp)}°C</p>
            <p className="desc">{toTitleCase(item.weather[0].description)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherDisplayComponent;
