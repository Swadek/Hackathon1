/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import { Card } from "primereact/card";
import "./RandomActivityCard.css";
// eslint-disable-next-line no-unused-vars

function RandomActivityCard({ randomActivity, setIsHovered }) {
  const { data } = randomActivity;
  const handleMouseEnter = () => {
    setIsHovered(false);
  };
  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (
    <div>
      {randomActivity && (
        <div
          className="cardActivityRandomRotate"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Card className="randomCardActivity cardActivity cardActivityRandom back">
            <p className="p-card-title-2">{data.activity}</p>
          </Card>
          <Card className="randomCardActivity cardActivity cardActivityRandom front">
            <p className="p-card-title">Trouver une activité</p>
          </Card>
        </div>
      )}
    </div>
  );
}
export default RandomActivityCard;
