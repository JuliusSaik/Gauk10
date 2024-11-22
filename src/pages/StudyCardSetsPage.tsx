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
      <h1>This is where all user created study card sets live</h1>
      {cards.map((card: Card) => (
        <StudyCard title={card.title} description={card.description} />
      ))}
    </>
  );
};

export default StudyCardsPage;
