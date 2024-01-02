import "./styles.css";
import axios from "axios";
import React, { useState } from "react";

export default function App() {
  let [city, giveCity] = useState(" ");
  let [temperature, setTemperature] = useState(null);
  let [descriptions, setDescriptions] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [clouds, setClouds] = useState(null);

  function showWeatherData(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescriptions(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setClouds(response.data.weather[0].icon);
  }

  function displayCity(event) {
    event.preventDefault();
    giveCity(event.target.value);
  }
  function handleCity(event) {
    event.preventDefault();
    let apiKey = `ae7531893d315790aca3946acd1731fc`;
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(Url).then(showWeatherData);
  }
  if (temperature !== null) {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={handleCity}>
          <input
            type="search"
            onChange={displayCity}
            placeholder="Enter the city..."
          />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>Temperature: {temperature}</li>
          <li>Description: {descriptions}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind} km/h</li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${clouds}.png`}
              alt=" "
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={handleCity}>
          <input
            type="search"
            onChange={displayCity}
            placeholder="Enter your city..."
          />
          <input type="submit" value="Search" />
        </form>
        <small>
          <a
            href="https://github.com/Katusha-K/React-week-4-homework"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Katia Kanievska
        </small>
      </div>
    );
  }
}
