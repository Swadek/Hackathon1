import React, { useState } from "react";
import Home from "./pages/Home";
import "./reset.css";
import "./App.css";

function App() {
  const [communeSelectedAdd, setCommuneSelectedAdd] = useState([]);
  const [cityDataSearch, setCityDataSearch] = useState([]);
  return (
    <div className="App">
      <Home
        communeSelectedAdd={communeSelectedAdd}
        setCommuneSelectedAdd={setCommuneSelectedAdd}
        cityDataSearch={cityDataSearch}
        setCityDataSearch={setCityDataSearch}
      />
      <p>coucou</p>
    </div>
  );
}

export default App;
