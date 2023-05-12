/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import "./Activities.css";
import { Card } from "primereact/card";

function FestivalCard({
  festival,
  startX,
  setStartX,
  endX,
  setEndX,
  RandomActivities,
  SaveActivities,
}) {
  const modalRef = useRef(null);

  function handleTouchStart(e) {
    setStartX(e.touches[0].clientX);
  }
  function handleTouchMove(e) {
    setEndX(e.touches[0].clientX);
  }
  function handleTouchEnd() {
    if (startX && endX) {
      if (endX < startX) {
        RandomActivities();
        // action si modal déplacée vers la gauche
      } else if (endX > startX) {
        SaveActivities();
        // action si modal déplacée vers la droite
      }
    }
    setStartX(null);
    setEndX(null);
  }
  return (
    <div className="cardContainer">
      {festival ? (
        <div
          className="card"
          ref={modalRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Card className="cardActivity">
            <p className="p-card-title">{festival.fields.nom_du_festival}</p>
            <p className="p-card-subtitle">
              {festival.fields.discipline_dominante}
            </p>
            <p className="p-cardActivity">
              {festival.fields.periode_principale_de_deroulement_du_festival}
            </p>
            <p className="p-cardActivity">
              {`${festival.fields.adresse_postale} 
        ${festival.fields.commune_principale_de_deroulement}`}
            </p>
            <p className="p-cardActivity">
              {festival.fields.site_internet_du_festival}
            </p>
          </Card>
        </div>
      ) : (
        "Déménage!!!"
      )}
    </div>
  );
}
export default FestivalCard;
