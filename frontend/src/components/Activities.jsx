/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React from "react";

import { Card } from "primereact/card";

function Activities({ culture }) {
  const { fields } = culture;
  console.log(culture);
  return (
    <Card className="cardActivity">
      <p className="p-card-title">{fields.domaine}</p>
      <p className="p-card-subtitle">{fields.type_equipement_ou_lieu}</p>
      <p className="card-p1">{fields.nom}</p>
      <p className="card-p2">{fields.adresse_postale}</p>
    </Card>
  );
}

export default Activities;
