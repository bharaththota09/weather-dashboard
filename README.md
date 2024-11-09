# Weather Dashboard

## Objective

Create a Weather Dashboard that shows the current weather and a 5-day forecast for a given city. The dashboard will interact with the OpenWeatherMap API to fetch weather data and a JSON server to store and retrieve favorite cities.

<img src="./public/localhost_5173_%20(2).png" alt="Sample image" width="100%" height="60%"/>

## Features

- **Search for a City**: Users can enter the name of a city to view the current weather and 5-day forecast.
- **Favorite Cities**: Users can add and remove cities from a favorites list.
- **Display Weather Data for Favorite Cities**: Users can see the weather forecast for their favorite cities.

## Technologies & Tools Used
- React.js
- HTML
- CSS
- JavaScript
- JSON Server
- VS Code
- OpenWeatherMap API

## Installation

1. Clone the repository:
```bash
git clone https://github.com/bharaththota09/weather-dashboard.git
```
2.Install the necessary dependencies:
```bash
cd weather-dashboard
npm install
```
3.Install JSON Server for managing the favorite cities:
```bash
npm install json-server --save-dev
```
4.Run the JSON Server for the backend:
```bash
npx json-server --watch db.json --port 5000
```
5.Start the React app:
```bash
npm run dev
```
Now app will be running at http://localhost:3000 and the JSON server backend will be running at http://localhost:5000.

## Usage
- Enter a city name in the search box.
- View the current weather and 5-day forecast for the city.
- Click "Add to Favorites" to save the city.
- View and manage your favorite cities in the "Favorite Cities" section.
- Remove a city from your favorites by clicking "Remove".

## Demo
A live demo of the React Weather App is available at
<a href="https://weather-dashboard-1-9ufx.onrender.com/" target="_blank">LINK TO LIVE DEMO</a>
[LINK TO LIVE DEMO](https://weather-dashboard-1-9ufx.onrender.com/).

## Credits
- The weather app was created by [Bharath Thota](https://github.com/bharaththota09) as a  project for the Aviara Labs.
- The app uses the OpenWeatherMap API to retrieve weather data.

## License
This project is licensed under the MIT license.
