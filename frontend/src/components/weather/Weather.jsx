import { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const apiKey = import.meta.env.VITE_APP_METEO_API_KEY;
  const exempleInsee = 31555;
  const [foreCast, setForeCast] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.meteo-concept.com/api/forecast/daily?token=${apiKey}&insee=${exempleInsee}`
      )
      .then((res) => {
        setForeCast(res.data.forecast[0]);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return foreCast && <div>coucou</div>;
}

export default Weather;
