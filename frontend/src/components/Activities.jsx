/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React from "react";
import { Card } from "primereact/card";

function Activities({ culture }) {
  return (
    <div>
      {culture ? (
        <Card>
          <p className="p-card-title">{culture.fields.domaine}</p>
          <p className="p-card-subtitle">
            {culture.fields.type_equipement_ou_lieu}
          </p>
          <p className="card-p1">{culture.fields.nom}</p>
          <p className="card-p2">{culture.fields.adresse_postale}</p>
        </Card>
      ) : (
        "Déménage!!!"
      )}
    </div>
  );
}

export default Activities;
