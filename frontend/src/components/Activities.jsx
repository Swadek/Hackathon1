/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React from "react";

import { Card } from "primereact/card";

function Activities({ culture }) {
  const { fields } = culture;
  console.log(culture);
  return culture ? (
    <Card>
      <p>{fields.nom}</p>
    </Card>
  ) : (
    <p>Loading</p>
  );
}

export default Activities;
