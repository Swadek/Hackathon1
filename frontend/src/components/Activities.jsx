/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React, { useRef } from "react";

import { Card } from "primereact/card";

function Activities({
  culture,
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
    <div>
      {culture ? (
        <div
          ref={modalRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Card className="cardActivity">
            <p className="p-card-title">{culture.fields.domaine}</p>
            <p className="p-card-subtitle">
              {culture.fields.type_equipement_ou_lieu}
            </p>
            <p className="p-cardActivity">{culture.fields.nom}</p>
            <p className="p-cardActivity">{culture.fields.adresse_postale}</p>
          </Card>
        </div>
      ) : (
        "Déménage!!!"
      )}
    </div>
  );
}

export default Activities;
