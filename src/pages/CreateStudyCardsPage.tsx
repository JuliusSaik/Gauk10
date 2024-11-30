import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import AddFlashCard from "../components/AddFlashCard/AddFlashCard";

export interface QACard {
  id: number;
  question: string;
  answer: string;
}

const firstCard: QACard = {
  id: 0,
  question: "",
  answer: "",
};

const CreateStudyCardsPage = () => {
  const [createdCards, setCreatedCards] = useState<QACard[]>([firstCard]);
  const [creationId, setCreationId] = useState(0);

  const onAdd = () => {
    const incrementId = creationId + 1;
    setCreationId(incrementId);
    const createdCard: QACard = {
      id: incrementId,
      question: "",
      answer: "",
    };
    setCreatedCards([...createdCards, createdCard]);
  };

  const handleCardChange = (filledCard: QACard) => {
    console.log(createdCards);
    const modifiedIndex = createdCards.findIndex(
      (card) => card.id === filledCard.id
    );
    const copyOfCards = [...createdCards];
    copyOfCards[modifiedIndex] = filledCard;
    setCreatedCards(copyOfCards);
  };

  const handleDelete = (id: number) => {
    const deleteIndex = createdCards.findIndex((card) => card.id === id);
    createdCards.splice(deleteIndex);
    const copyOfCards = [...createdCards];
    setCreatedCards(copyOfCards);
  };

  const onSubmitCards = () => {
    console.log(createdCards);
  };

  return (
    <>
      <Button variant="contained" onClick={onAdd}>
        Add a card
      </Button>
      <Button variant="contained" onClick={onSubmitCards}>
        Submit
      </Button>

      {createdCards.map((qaCard) => (
        <AddFlashCard
          cardId={qaCard.id}
          handleChange={handleCardChange}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default CreateStudyCardsPage;
