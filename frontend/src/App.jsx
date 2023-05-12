import React, { useState } from "react";
import Home from "./pages/Home";
import "./reset.css";
import "./App.css";
import "./CSS/activityCard.css";

function App() {
  const [culture, setCulture] = useState();
  const [cultureRandom, setCultureRandom] = useState(0);
  const [communeSelectedAdd, setCommuneSelectedAdd] = useState([
    "Toulouse - 31000",
  ]);
  const [cityDataSearch, setCityDataSearch] = useState([31555]);
  const [cultureIsLoaded, setCultureIsLoaded] = useState(false);
  const [randomActivity, setRandomActivity] = useState();
  const [savedCulture, setSavedCulture] = useState([]);
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const [foreCast, setForeCast] = useState();
  const [festival, setFestival] = useState();
  const [coordUndefined, setCoordUndefined] = useState([]);
  const [inOut, setInOut] = useState(true);
  const [actualWeather, setActualWeather] = useState(false);

  return (
    <div className="App">
      <Home
        culture={culture}
        setCulture={setCulture}
        communeSelectedAdd={communeSelectedAdd}
        setCommuneSelectedAdd={setCommuneSelectedAdd}
        cityDataSearch={cityDataSearch}
        setCityDataSearch={setCityDataSearch}
        randomActivity={randomActivity}
        setRandomActivity={setRandomActivity}
        cultureRandom={cultureRandom}
        setCultureRandom={setCultureRandom}
        cultureIsLoaded={cultureIsLoaded}
        setCultureIsLoaded={setCultureIsLoaded}
        savedCulture={savedCulture}
        setSavedCulture={setSavedCulture}
        startX={startX}
        setStartX={setStartX}
        endX={endX}
        setEndX={setEndX}
        foreCast={foreCast}
        setForeCast={setForeCast}
        festival={festival}
        setFestival={setFestival}
        setCoordUndefined={setCoordUndefined}
        coordUndefined={coordUndefined}
        inOut={inOut}
        setInOut={setInOut}
        actualWeather={actualWeather}
        setActualWeather={setActualWeather}
      />
    </div>
  );
}

export default App;
