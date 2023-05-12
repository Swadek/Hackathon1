import React from "react";
import "./About.css";
import Footer from "../../components/footer/footer";
import "../../components/footer/footer.css";

function About() {
  return (
    <div className="aboutContent">
      <section>
        <div className="aboutHackathon">
          <div>
            <div className="navbar">
              <img
                className="logoHackathon"
                src="./assets/logo_aleactivite.svg"
                alt="logo"
              />
            </div>
            <h2 className="titleAPropos">Aléactivité</h2>
          </div>
          <p>
            Bienvenue sur notre site internet permettant de trouver des idées
            d'activités dans la ville de votre choix. <br />
            Vous pourrez obtenir aléatoirement des activités indoor ou outdoor
            en fonction du lieu et de la météo de ce lieu. <br />
            Vous pouvez également ajouter des activités en favori afin de
            pouvoir les visualiser sur une carte pour choisir l'activité de
            votre choix.
          </p>
        </div>
        <div className="aboutAPI">
          <div>
            <h2 className="titleAPropos"> Ressources utilisées </h2>
          </div>
          <p>
            Pour réaliser ce site internet, plusieurs API ont été utilisées pour
            récupérer les données:
          </p>
          <ul>
            <li className="api">
              <a
                href="http://www.boredapi.com/api/activity/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BoredAPI : Idées d'activités ludique
              </a>
            </li>
            <li className="api">
              <a
                href="https://leafletjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LEAFLET MAP
              </a>
            </li>
            <li className="api">
              <a
                href="https://api.gouv.fr/documentation/api-geo"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Découpage Administratif - (API Geo)
              </a>
            </li>
            <li className="api">
              <a
                href="https://data.culture.gouv.fr/api/records/1.0/search/?dataset=festivals-global-festivals-_-pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Culture.gouv : tous les Festivals
              </a>
            </li>
            <li className="api">
              <a
                href="https://api.meteo-concept.com/api/forecast"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Meteo Concept
              </a>
            </li>
          </ul>
        </div>

        <div className="aboutDev">
          <div className="teamDev">
            <h2 className="titleAPropos">L'équipe de développeurs</h2>
            <br />
          </div>
          <div className="trombi">
            <div className="dev">
              <img
                className="photo"
                src="./assets/hugo_200x200.png"
                alt="Hugo"
              />
              <br />
              <h2>Hugo CARNAZZA</h2>
            </div>
            <div className="dev">
              <img
                className="photo"
                src="./assets/jasmine200x200.jpg"
                alt="Jasmine"
              />
              <br />
              <h2>Jasmine GROZINGER</h2>
            </div>
            <div className="dev">
              <img
                className="photo"
                src="./assets/matthieu_200x200.png"
                alt="Matthieu"
              />
              <br />
              <h2>Matthieu GUINET</h2>
            </div>
            <div className="dev">
              <img
                className="photo"
                src="./assets/cyrille200x200.jpg"
                alt="Cyrille"
              />
              <br />
              <h2>Cyrille AQUILINA</h2>
            </div>
            <div className="dev">
              <img
                className="photo"
                src="./assets/ante200x200.jpg"
                alt="Anté"
              />
              <br />
              <h2>Anté JULIAN</h2>
            </div>
          </div>
          <p className="no-justify">
            Ce site Web a été réalisé dans le cadre du premier hackathon de la
            formation “Développeur Web” à la Wild Code School.
          </p>
        </div>
      </section>
      <div className="component-footer">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default About;
