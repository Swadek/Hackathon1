/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import axios from "axios";
import Activities from "../components/Activities";
import Weather from "../components/weather/Weather";
import Searchbar from "../components/searchbar/Searchbar";
// eslint-disable-next-line import/no-extraneous-dependencies
import "primereact/resources/themes/lara-light-indigo/theme.css";
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import "primereact/resources/primereact.min.css";

function Home({
  culture,
  setCulture,
  cultureRandom,
  setCultureRandom,
  communeSelectedAdd,
  setCommuneSelectedAdd,
  cityDataSearch,
  setCityDataSearch,
  // randomActivity,
  setRandomActivity,
}) {
  function RandomActivities() {
    setCultureRandom(Math.floor(Math.random() * culture.length));
  }
  useEffect(() => {
    axios
      .get(
        `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=base-des-lieux-et-des-equipements-culturels&q=&lang=fr&rows=10000&sort=sous_domaines&refine.code_insee_arrondt=75102&exclude.domaine=Archives`
      )
      .then((res) => setCulture(res.data.records))
      .catch((error) => console.error(error.message));
  }, []);
  console.log(culture, cultureRandom);
  useEffect(() => {
    axios
      .get(`http://www.boredapi.com/api/activity/`)
      .then((data) => setRandomActivity(data))
      .catch((error) => console.error(error.message));
  }, []);
  return (
    <div>
      <Weather cityDataSearch={cityDataSearch} />
      <div className="SearchBar">
        <Searchbar
          setCommuneSelectedAdd={setCommuneSelectedAdd}
          communeSelectedAdd={communeSelectedAdd}
          setCityDataSearch={setCityDataSearch}
        />

        <div>
          <ul>
            {communeSelectedAdd.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      {culture ? (
        <div>
          <Activities culture={culture[cultureRandom]} />
          <button onClick={() => RandomActivities()}>Next</button>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default Home;
