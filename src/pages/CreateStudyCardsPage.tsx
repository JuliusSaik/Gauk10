import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import AddFlashCard from "../components/AddFlashCard/AddFlashCard";

export interface QACard {
  question: string;
  answer: string;
}

const firstCard: QACard = {
  question: "",
  answer: "",
};

const CreateStudyCardsPage = () => {
  const [createdCards, setCreatedCards] = useState<QACard[]>([firstCard]);

  const onAdd = () => {
    setCreatedCards([...createdCards, firstCard]);
  };

  return (
    <>
      {createdCards.map((qaCard) => (
        <AddFlashCard />
      ))}
      <div className="container mx-auto p-4 rounded-lg">
        <Box className="flex justify-center items-center border border-black border-6 bg-gray-800 rounded-lg">
          <div className="flex items-center m-4">
            <button
              className="object-center w-full px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transform transition-all duration-300 hover:scale-105"
              onClick={onAdd}
            >
              Add flash card
            </button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default CreateStudyCardsPage;
