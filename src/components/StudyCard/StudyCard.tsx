import React, { useState, useEffect, useRef } from "react";
import { Card } from "./StudyCardList";

const StudyCard: React.FC<Card> = ({ id, question, answer }) => {
  const [versti, sversti] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div
      className={`kortele ${versti ? "versti" : ""}`}
      onClick={() => sversti(!versti)}
    >
      <div className="priekis">
        <p className="text-black">{question}</p>
      </div>
      <div className="galas">
        <p className="text-black">{answer}</p>
      </div>
    </div>
  );
};
export default StudyCard;
