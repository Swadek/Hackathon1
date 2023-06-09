/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import "./Searchbar.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import "primeicons/primeicons.css";

function Searchbar({
  setCommuneSelectedAdd,
  setCityDataSearch,
  setCoordUndefined,
}) {
  const [commune, setCommune] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleAddCommuneSelectedAdd = (code) => {
    setCommuneSelectedAdd([code]); // Add commune name to the table
  };

  const handleAddCitySearch = (code) => {
    setCityDataSearch(code); // Add commune name to the table
  };

  const handleAddCoord = (code) => {
    setCoordUndefined(code); // Add coord to the table
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInputValue(e.target.value);
  };

  //   Update query to recove Insee Code
  const onSearchCodePostal = (communeName, codePostal) => {
    axios
      .get(
        `https://geo.api.gouv.fr/communes?nom=${communeName}&codePostal=${codePostal}&fields=code,nom,centre,codesPostaux,population`
      )
      .then((res) => {
        const filteredResults = res.data.filter(
          (result) => result.nom.length === communeName.length
        );
        const codesInsee = filteredResults.map((result) => result.code);
        let insee = [];
        if (codePostal.startsWith(750)) {
          insee.push((parseInt(codePostal, 10) + 100).toString());
        } else if (codePostal.startsWith(130) || codePostal.startsWith(1301)) {
          insee.push((parseInt(codePostal, 10) + 200).toString());
        } else if (codePostal.startsWith(690)) {
          insee.push((parseInt(codePostal, 10) + 380).toString());
        } else if (codePostal.startsWith(75116)) {
          insee.push(parseInt(codePostal, 10).toString());
        } else {
          insee = codesInsee;
        }

        const communeSelected = `${communeName} - ${codePostal}`;
        handleAddCommuneSelectedAdd(communeSelected);

        const citySearch = insee;
        handleAddCitySearch(citySearch);

        const coordSearch = res.data[0].centre.coordinates.reverse();
        handleAddCoord(coordSearch);
      })

      .catch((err) => {
        console.error(err.message);
      });
  };

  //  Update input text
  const onSearchInputValue = (value) => {
    setSearchInputValue(value);
    const [communeName, codePostal] = value.split(" - ");
    onSearchCodePostal(communeName, codePostal);
    setSearchInputValue("");
  };

  useEffect(() => {
    axios
      .get(`https://geo.api.gouv.fr/communes`)
      .then((res) => {
        setCommune(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  //  Only number
  const regEx = /[0-9]/g;

  return (
    <div>
      {isLoaded ? (
        <div className="searchbar-content">
          <div className="search-inner">
            <img src="./assets/ic_sharp-search.svg" alt="search icon" />
            <input
              className="searchBar"
              type="text"
              placeholder="Localisation"
              onChange={handleSearch}
              value={searchInputValue}
            />
          </div>
          <div className="dropdown">
            {commune
              .filter((item) => {
                const communeName = item.nom.toLowerCase();
                const searchInputValueLower = searchInputValue.toLowerCase();
                const matchName = communeName.startsWith(searchInputValueLower);
                // Search if one of element correspond to code postal
                const matchCodePostal = item.codesPostaux.some((postal) =>
                  postal.startsWith(searchInputValueLower)
                );
                return searchInputValueLower && (matchName || matchCodePostal);
              })
              .map((item) => (
                <div className="dropdown-row" key={item.code}>
                  {regEx.test(searchInputValue)
                    ? item.codesPostaux
                        .filter((postal) =>
                          postal.startsWith(searchInputValue.toLowerCase())
                        )
                        .map((postal) => (
                          <div
                            className="suggestion"
                            key={postal}
                            onClick={() => {
                              onSearchInputValue(`${item.nom} - ${postal}`);
                            }}
                            onKeyDown={() => {}}
                            role="button"
                            tabIndex="0"
                          >
                            {`${item.nom} - ${postal}`}
                          </div>
                        ))
                    : item.codesPostaux.map((postal, index) => (
                        <div
                          className="suggestion"
                          key={item.codesPostaux[index]}
                          onClick={() => {
                            onSearchInputValue(
                              `${item.nom} - ${item.codesPostaux[index]}`
                            );
                          }}
                          onKeyDown={() => {}}
                          role="button"
                          tabIndex="0"
                        >
                          {`${item.nom} - ${item.codesPostaux[index]}`}
                        </div>
                      ))}
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Searchbar;
