/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import axios from "axios";

function Home({ culture, setCulture }) {
  useEffect(() => {
    axios
      .get(
        `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=base-des-lieux-et-des-equipements-culturels&q=&lang=fr&rows=10000&sort=sous_domaines&refine.code_insee_arrondt=75102&exclude.domaine=Archives`
      )
      .then((data) => setCulture(data))
      .catch((error) => console.error(error.message));
  }, []);
  console.warn(culture);
  return <div>coucou 1</div>;
}

export default Home;
