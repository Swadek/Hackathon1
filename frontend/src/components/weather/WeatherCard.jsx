/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import weatherCode from "../../utils";

function WeatherCard({ foreCast, city }) {
  return (
    <div className="Card">
      <div className="city">
        <img src="./assets/map_pin.svg" alt="map icon" />
        <p className="cityName">{city}</p>
      </div>
      <div className="weatherContainer">
        {weatherCode.map((el) => {
          return el.code === foreCast.weather ? (
            <>
              <img
                key={el.code}
                className="iconWeather"
                src={el.icon}
                alt={el.text}
              />
              <p className="weatherText">{el.text}</p>
            </>
          ) : null;
        })}
        <div className="windInfo">
          <img src="./assets/wind.svg" alt="wind icon" />
          <p className="windSpeed">{foreCast.wind10m} km/h</p>
        </div>
        <p className="tempMin">{foreCast.tmin} °C</p>
        <p className="tempMax">{foreCast.tmax} °C</p>
      </div>
    </div>
  );
}

export default WeatherCard;
