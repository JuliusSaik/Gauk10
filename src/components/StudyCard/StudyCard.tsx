import React from "react";

export interface Card {
  title: string;
  description: string;
}

const StudyCard: React.FC<Card> = ({ title, description }) => {
  return <div>{title}</div>;
};

export default StudyCard;
