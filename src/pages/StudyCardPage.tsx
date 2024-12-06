import { common } from "@mui/material/colors";
import React, { useState, useEffect, useRef } from "react";
import StudyCardList from "C:/Users/marty/gauk10/src/components/StudyCard/StudyCardList";
import "C:/Users/marty/gauk10/src/components/StudyCard/card.css";
import { SampleCards } from "./mock/FlashCardQuestions";

const StudyCardPage = () => {
  const sampleCards = SampleCards;
  const [cards, setCards] = useState(sampleCards);
  return (
    <div className="container">
      <StudyCardList cards={cards} />
    </div>
  );
};

export default StudyCardPage;
