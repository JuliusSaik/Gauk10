import { Box, Button, TextField, Typography } from "@mui/material";
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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
    createdCards.splice(deleteIndex, 1);
    const copyOfCards = [...createdCards];
    setCreatedCards(copyOfCards);
  };

  const onSubmitCards = () => {
    console.log(createdCards);
  };

  return (
    <>
      <Box className="flex justify-center items-start min-h-screen bg-gray-900">
        <Box className="w-full  bg-gray-800 text-white p-8 rounded-lg shadow-lg">
          <Typography
            variant="h4"
            className="mb-8 font-semibold text-white text-center"
          >
            Create a new flashcard set
          </Typography>

          {/* Buttons */}
          <Box className="flex justify-end gap-4 mb-8">
            <Button
              variant="contained"
              className="bg-blue-600 hover:bg-blue-700 text-white w-48"
              onClick={onSubmitCards}
            >
              Create and practice
            </Button>
          </Box>

          <Box className="flex-col space-y-12">
            {/* Title Input */}
            <TextField
              placeholder="Enter a title, like 'Programming - Chapter 22: Dynamic memory allocation"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-8 bg-blue-300 text-black"
            />

            {/* Description Input */}
            <TextField
              placeholder="Add a description..."
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mb-8 bg-blue-300 text-black"
            />
          </Box>

          <Box className="mt-12">
            {createdCards.map((qaCard) => (
              <AddFlashCard
                cardId={qaCard.id}
                handleChange={handleCardChange}
                handleDelete={handleDelete}
              />
            ))}
            <Button className="w-full mt-8" variant="contained" onClick={onAdd}>
              Add a card
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateStudyCardsPage;