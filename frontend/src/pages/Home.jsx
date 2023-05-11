/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import axios from "axios";
import Activities from "../components/Activities";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

function Home({ culture, setCulture, cultureRandom, setCultureRandom }) {
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
  return culture ? (
    <div>
      <button onClick={() => RandomActivities}>Next</button>
      <Activities culture={culture[cultureRandom]} />
    </div>
  ) : (
    <p>Loading</p>
  );
}

export default Home;
