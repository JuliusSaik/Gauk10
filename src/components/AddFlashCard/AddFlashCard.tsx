import { DeleteRounded, DragHandleRounded } from "@mui/icons-material";
import { Box, Divider, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { QACard } from "../../pages/CreateStudyCardsPage";

export interface AddFlashCardProps {
  cardId: number;
  handleChange: (filledCard: QACard) => void;
  handleDelete: (id: number) => void;
}

const AddFlashCard: React.FC<AddFlashCardProps> = ({
  cardId,
  handleChange,
  handleDelete,
}) => {
  const defaultCardValues: QACard = {
    id: cardId,
    question: "",
    answer: "",
  };

  const [cardValues, setCardValues] = useState<QACard>(defaultCardValues);

  const handleQuestionChange = (value: string) => {
    const filledCard: QACard = {
      id: cardId,
      question: value,
      answer: cardValues.answer,
    };
    setCardValues(filledCard);
  };

  const handleAnswerChange = (value: string) => {
    const filledCard: QACard = {
      id: cardId,
      question: cardValues.question,
      answer: value,
    };
    setCardValues(filledCard);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      handleChange(cardValues);
    }, 500);
    return () => clearTimeout(timerId);
  }, [cardValues]);

  return (
    <>
      <div className="container mx-auto p-4">
        <Box className="border border-black border-6 bg-gray-800 rounded-lg">
          <div className="flex object-right h-auto flex-line justify-end p-2">
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(cardId)}
            >
              <DeleteRounded className="fill-current text-gray-200 hover:text-blue-500" />
            </IconButton>
          </div>

          <Divider sx={{ borderBottomWidth: 5 }} className="bg-gray-500" />

          <div className="flex items-center space-x-4 m-4 pt-4">
            <div className="flex-1">
              <TextField
                id="filled-basic"
                onChange={(e) => handleQuestionChange(e.target.value)}
                label="Enter question"
                variant="filled"
                className="w-full bg-gray-100 text-white p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm text-gray-400 m-1">
                QUESTION
              </label>
            </div>

            <div className="flex-1">
              <TextField
                id="filled-basic"
                onChange={(e) => handleAnswerChange(e.target.value)}
                label="Enter answer"
                variant="filled"
                className="w-full bg-gray-100 text-white p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-sm text-gray-400 m-1">ANSWER</label>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default AddFlashCard;
