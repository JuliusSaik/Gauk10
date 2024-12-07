import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddFlashCard from "../components/AddFlashCard/AddFlashCard";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

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

  const [selectedDate, setSelectedDate] = useState(dayjs()); // Default to current date (Rafal)

  const onSubmitCards = () => {
    console.log("Selected Date:", selectedDate.format("YYYY-MM-DD")); // Rafal
    console.log(createdCards);
  };

  return (
    <>
      <Box className="flex justify-center items-start min-h-screen bg-gray-900">
        <Box className="w-full bg-gray-800 text-white p-8 rounded-lg shadow-lg">
          <Typography
            variant="h4"
            className="mb-8 font-semibold text-white text-center"
          >
            Create a new flashcard set
          </Typography>

          <Box className="flex-col space-y-12">
            {/* Title Input */}
            <TextField
              placeholder="Enter a title, like 'Programming - Chapter 22: Dynamic memory allocation"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-8 bg-gray-100 text-black"
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
              className="mb-8 bg-gray-100 text-black"
            />
          </Box>
          <Box className="flex justify-between gap-4 mb-8 mt-8">
            <DatePicker
              className="w-1/2"
              defaultValue={dayjs()}
              sx={{
                "& .MuiPickersToolbar-root": {
                  color: "#bbdefb",
                  borderRadius: "10px",
                  backgroundColor: "#F5F5F5",
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "#F5F5F5",
                  color: "black",
                },
                "& .MuiPickersDay-root": {
                  color: "#F5F5F5",
                },
                "& .Mui-selected": {
                  backgroundColor: "#2196f3 !important",
                  color: "white !important",
                },
                "& .MuiInputLabel-root": {
                  color: "#2196f3",
                },
              }}
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue || dayjs())} // Default to current date if null (Rafal)
            />

            <Button
              variant="contained"
              className="bg-blue-600 hover:bg-blue-700 text-white w-1/2"
              onClick={onSubmitCards}
            >
              Create and practice
            </Button>
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
