/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React from "react";
import Searchbar from "../components/searchbar/Searchbar";

function Home({
  communeSelectedAdd,
  setCommuneSelectedAdd,
  cityDataSearch,
  setCityDataSearch,
}) {
  return (
    <div>
      {cityDataSearch}
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
    </div>
  );
}

export default Home;
