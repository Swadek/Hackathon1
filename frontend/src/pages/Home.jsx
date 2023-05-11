import React, { useEffect } from "react";
import PropTypes from "prop-types";
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
  console.log(culture);
  return <div>coucou 1</div>;
}

export default Home;

Home.propTypes = {
  culture: PropTypes.shape.isRequired,
  setCulture: PropTypes.func.isRequired,
};
