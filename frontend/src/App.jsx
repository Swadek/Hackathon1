import React, { useState } from "react";
import Home from "./pages/Home";
import "./reset.css";
import "./App.css";

function App() {
  const [culture, setCulture] = useState([]);
  return (
    <div className="App">
      <Home culture={culture} setCulture={setCulture} />
      <p>coucou</p>
    </div>
  );
}

export default App;
