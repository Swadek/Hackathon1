import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <p>© Wild Code School</p>
      <div className="navlink">
        <NavLink className="aNavlink" to="/">
          <p>Accueil</p>
        </NavLink>
        <NavLink className="aNavlink" to="/about">
          <p>A propos</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
