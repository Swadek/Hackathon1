/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import styled from "styled-components";
import Activities from "../components/Activities";
import RandomActivityCard from "../components/RandomActivityCard";
import Weather from "../components/weather/Weather";
import Searchbar from "../components/searchbar/Searchbar";
// eslint-disable-next-line import/no-extraneous-dependencies
import "primereact/resources/themes/lara-light-indigo/theme.css";
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import "primereact/resources/primereact.min.css";
import "./Home.css";
import weatherCode from "../utils";
import Map from "../components/map/Map";
import FestivalCard from "../components/FestivalCard";

const BgImg = styled.div`
  background: url(${({ url }) => url});
  height: 50vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
`;

function Home({
  culture,
  setCulture,
  cultureRandom,
  setCultureRandom,
  communeSelectedAdd,
  setCommuneSelectedAdd,
  cityDataSearch,
  setCityDataSearch,
  cultureIsLoaded,
  setCultureIsLoaded,
  randomActivity,
  setRandomActivity,
  savedCulture,
  setSavedCulture,
  startX,
  setStartX,
  endX,
  setEndX,
  foreCast,
  setForeCast,
  setCoordUndefined,
  coordUndefined,
  festival,
  setFestival,
  inOut,
  setInOut,
  actualWeather,
  setActualWeather,
}) {
  function RandomActivities() {
    setCultureRandom(Math.floor(Math.random() * culture.length));
    setInOut(!inOut);
  }
  function SaveActivities() {
    setSavedCulture([...savedCulture, culture[cultureRandom]]);
    setCultureRandom(Math.floor(Math.random() * culture.length));
    setInOut(!inOut);
  }
  useEffect(() => {
    axios
      .get(
        `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=base-des-lieux-et-des-equipements-culturels&q=&lang=fr&rows=10000&sort=sous_domaines&refine.code_insee_arrondt=${cityDataSearch[0]}&exclude.domaine=Archives&exclude.sous_domaines=Monument `
      )
      .then((res) => {
        setCulture(res.data.records);
        setCultureIsLoaded(true);
      })
      .catch((error) => console.error(error.message));
  }, [communeSelectedAdd]);
  useEffect(() => {
    axios
      .get(`http://www.boredapi.com/api/activity/`)
      .then((data) => setRandomActivity(data))
      .catch((error) => console.error(error.message));
  }, [communeSelectedAdd]);
  useEffect(() => {
    axios
      .get(
        `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=festivals-global-festivals-_-pl&q=&rows=10000&refine.code_insee_commune=${cityDataSearch[0]}`
      )
      .then((data) => setFestival(data.data.records))
      .catch((error) => console.error(error.message));
  }, [communeSelectedAdd]);

  console.log(festival);

  return (
    <div>
      {foreCast
        ? weatherCode.map((el) => {
            return el.code === foreCast.weather
              ? (setActualWeather(el.weatherIsGood),
                (<BgImg key={el.code} url={el.urlbg} />))
              : null;
          })
        : null}

      <div className="SearchBar">
        <Searchbar
          setCommuneSelectedAdd={setCommuneSelectedAdd}
          communeSelectedAdd={communeSelectedAdd}
          setCityDataSearch={setCityDataSearch}
          setCoordUndefined={setCoordUndefined}
        />
      </div>
      <Weather
        cityDataSearch={cityDataSearch}
        foreCast={foreCast}
        setForeCast={setForeCast}
        setInOut={setInOut}
      />
      {cultureIsLoaded && festival ? (
        <div>
          {!actualWeather ? (
            <Activities
              culture={culture[cultureRandom]}
              startX={startX}
              setStartX={setStartX}
              endX={endX}
              setEndX={setEndX}
              RandomActivities={() => RandomActivities()}
              SaveActivities={() => SaveActivities()}
            />
          ) : inOut ? (
            <FestivalCard festival={festival[cultureRandom]} />
          ) : (
            <Activities
              culture={culture[cultureRandom]}
              startX={startX}
              setStartX={setStartX}
              endX={endX}
              setEndX={setEndX}
              RandomActivities={() => RandomActivities()}
              SaveActivities={() => SaveActivities()}
            />
          )}
          <button onClick={() => RandomActivities()}>Next</button>
          <button onClick={() => SaveActivities()}>Save</button>
        </div>
      ) : (
        <p>Loading</p>
      )}
      {randomActivity ? (
        <RandomActivityCard randomActivity={randomActivity} />
      ) : null}
      {cultureIsLoaded && (
        <Map
          coord={culture[cultureRandom]}
          coordUndefined={coordUndefined}
          savedCulture={savedCulture}
        />
      )}
    </div>
  );
}

export default Home;
