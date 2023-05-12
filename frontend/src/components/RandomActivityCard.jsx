/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import { Card } from "primereact/card";
// eslint-disable-next-line no-unused-vars
function RandomActivityCard({ randomActivity, setRandomActivity }) {
  const { data } = randomActivity;
  const hover = (e) => {
    setRandomActivity(e.target.randomActivity);
    console.log("coucou");
  };
  return (
    <div className="cardActivityRandomRotate">
      {/* onBlur={hover} */}
      {/* onMouseOut={hover} */}
      <Card
        className="cardActivity cardActivityRandom back"
        onMouseover={hover}
      >
        <p className="p-card-title">{data.activity}</p>
        <p className="p-card-subtitle">Type d'activité: {data.type}</p>
        <p className="p-card-subtitle">
          Nombre de participants: {data.participants}
        </p>
      </Card>
      <Card className="cardActivity cardActivityRandom front">
        <p className="p-card-title cardActivityRandom back">
          Trouver une activité
        </p>
      </Card>
    </div>
  );
}
export default RandomActivityCard;
