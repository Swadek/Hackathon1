/* eslint-disable react/prop-types */
import { Card } from "primereact/card";

function FestivalCard({ festival }) {
  return (
    <Card className="cardActivity">
      <p className="p-card-title">{festival.fields.nom_du_festival}</p>
      <p className="p-card-subtitle">{festival.fields.discipline_dominante}</p>
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
  );
}
export default FestivalCard;
