import { useState } from "react";
import { api } from "../constants/ApiConstants";

export const LocalWeather = () => {
  const [weather, setWeather] = useState(undefined);
  const [loading, setLoading] = useState(false);

  function getWeatherInfo(city) {
    console.log(city);
    setLoading(false);
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=f09452c59321196b43c97b67817c69f1`;
    console.log(api);
    fetch(`${api.base}/forecast?q=${city}&appid=${api.key}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setWeather(res);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="local-weather">
      <br />
      <div className="header-buttons">
        <button onClick={() => getWeatherInfo("Skopje")} className="cityButton">
          Skopje
        </button>
        <button onClick={() => getWeatherInfo("Skopje")} className="cityButton">
          Tetovo
        </button>
        <button onClick={() => getWeatherInfo("Veles")} className="cityButton">
          Veles
        </button>
        <button onClick={() => getWeatherInfo("Debar")} className="cityButton">
          Debar
        </button>
        <button
          onClick={() => getWeatherInfo("Strumica")}
          className="cityButton"
        >
          Strumica
        </button>
        <button
          onClick={() => getWeatherInfo("Gevgelija")}
          className="cityButton"
        >
          Gevgelija
        </button>
        <button
          onClick={() => getWeatherInfo("Delcevo")}
          className="cityButton"
        >
          Delcevo
        </button>
      </div>
      <div className="local-container">
        {weather &&
          loading === false &&
          weather.list.map((weatherList, i) => {
            return (
              <div key={i}>
                <div className="location-box">
                  <div className="location">
                    {weather.city.name}, {weather.city.country}
                  </div>
                  <div className="date">{weatherList.dt_txt}</div>
                  <div className="weather-box">
                    <div className="temp">{weatherList.main.temp}°c</div>
                    <div className="weather">{weatherList.weather[0].main}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {loading && <div className="loader">Loading</div>}
    </div>
  );
};
