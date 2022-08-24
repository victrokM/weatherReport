import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";


function WheaterReport() {

  // const key = 'ae739f39473e757687ce91e3f3906d48'
  let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=ae739f39473e757687ce91e3f3906d48&lang=es";
  let cityUrl = "&q=";

  let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=ae739f39473e757687ce91e3f3906d48&lang=es";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  const getWeather = async (local) => {
    setLoading(true);
    setLocation(local);

    /**
     * weather
     */

    urlWeather = urlWeather + cityUrl + local;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });

    /**
     * forecast
     */

    urlForecast = urlForecast + cityUrl + local;

    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((forecastData) => {
        setForecast(forecastData);
        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  };

  console.log(loading)

  return (
    <div>
      <Navbar
        newLocation={getWeather}
      />

      <Card
        showData={show}
        loadingData = {loading}
        weatherData={weather}
        forecastData={forecast}
      />
    </div>
  )
}

export default WheaterReport;
