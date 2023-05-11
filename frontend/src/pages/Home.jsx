/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Activities from "../components/Activities";
import Weather from "../components/weather/Weather";
import Searchbar from "../components/searchbar/Searchbar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import weatherCode from "../utils";

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
  foreCast,
  setForeCast,
}) {
  function RandomActivities() {
    setCultureRandom(Math.floor(Math.random() * culture.length));
  }
  useEffect(() => {
    axios
      .get(
        `https://data.culture.gouv.fr/api/records/1.0/search/?dataset=base-des-lieux-et-des-equipements-culturels&q=&lang=fr&rows=10000&sort=sous_domaines&refine.code_insee_arrondt=${cityDataSearch[0]}&exclude.domaine=Archives`
      )
      .then((res) => {
        setCulture(res.data.records);
        setCultureIsLoaded(true);
      })
      .catch((error) => console.error(error.message));
  }, [communeSelectedAdd]);

  return (
    <div>
      {foreCast
        ? weatherCode.map((el) => {
            return el.code === foreCast.weather ? (
              <BgImg key={el.code} url={el.urlbg} />
            ) : null;
          })
        : null}

      <div className="SearchBar">
        <Searchbar
          setCommuneSelectedAdd={setCommuneSelectedAdd}
          communeSelectedAdd={communeSelectedAdd}
          setCityDataSearch={setCityDataSearch}
        />
      </div>
      <Weather
        cityDataSearch={cityDataSearch}
        foreCast={foreCast}
        setForeCast={setForeCast}
      />
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
