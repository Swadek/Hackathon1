import React, { useState } from "react";
import Home from "./pages/Home";
import "./reset.css";
import "./App.css";

function App() {
  const [culture, setCulture] = useState();
  const [cultureRandom, setCultureRandom] = useState(0);
  return (
    <div className="App">
      <Home
        culture={culture}
        setCulture={setCulture}
        cultureRandom={cultureRandom}
        setCultureRandom={setCultureRandom}
      />
    </div>
  );
}

export default App;
