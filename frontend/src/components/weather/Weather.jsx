/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

function Weather({ cityDataSearch, foreCast, setForeCast }) {
  const apiKey = import.meta.env.VITE_APP_METEO_API_KEY;

  const [city, setCity] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.meteo-concept.com/api/forecast/daily?token=${apiKey}&insee=${cityDataSearch}`
      )
      .then((res) => {
        setForeCast(res.data.forecast[0]);
        setCity(res.data.city.name);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [cityDataSearch]);
  return foreCast && <WeatherCard city={city} foreCast={foreCast} />;
}

export default Weather;
