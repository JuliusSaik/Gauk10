import React from "react";
import StudyCard, { Card } from "../components/StudyCard/StudyCard";

const cards: Card[] = [
  {
    title: "card1",
    description: "carddescrption1",
  },
  {
    title: "card2",
    description: "carddescrption2",
  },
];

const StudyCardsPage = () => {
  return (
    <>
      {cards.map((card: Card) => (
        <StudyCard title={card.title} description={card.description} />
      ))}
    </>
  );
};

export default StudyCardsPage;
