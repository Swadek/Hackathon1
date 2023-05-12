/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import { Card } from "primereact/card";
import "./RandomActivityCard.css";
// eslint-disable-next-line no-unused-vars
function RandomActivityCard({ randomActivity, setRandomActivity }) {
  const { data } = randomActivity;
  return (
    <Card className="randomCardActivity">
      <p className="p-card-title">{data.activity}</p>
    </Card>
  );
}
export default RandomActivityCard;
