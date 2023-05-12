/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Activities from "../components/Activities";
import Weather from "../components/weather/Weather";
import Searchbar from "../components/searchbar/Searchbar";
// eslint-disable-next-line import/no-extraneous-dependencies
import "primereact/resources/themes/lara-light-indigo/theme.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "primereact/resources/primereact.min.css";
import "./Home.css";

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
}) {
  function RandomActivities() {
    setCultureRandom(Math.floor(Math.random() * culture.length));
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
  return (
    <div>
      <Weather cityDataSearch={cityDataSearch} />
      <div className="searchBarButtonArrayResults">
        <Searchbar
          setCommuneSelectedAdd={setCommuneSelectedAdd}
          communeSelectedAdd={communeSelectedAdd}
          setCityDataSearch={setCityDataSearch}
        />
      </div>
      {cultureIsLoaded ? (
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
