import { Box, Button, TextField, Fade, Typography } from "@mui/material";
import React, { useState } from "react";
import AddFlashCard from "../components/AddFlashCard/AddFlashCard";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { API_BASE_URL } from "../config/constants";
import { CreateFlashCardSet, CreateQACard, QACard } from "../config/types";
import { useNavigate } from "react-router-dom";

const firstCard: QACard = {
  id: 0,
  question: "",
  answer: "",
};

const CreateStudyCardsPage = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const firstCard: QACard = {
    id: 0,
    question: "",
    answer: "",
  };

  const [createdCards, setCreatedCards] = useState<QACard[]>([firstCard]);
  const [creationId, setCreationId] = useState(0);
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Default to current date (Rafal)

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
    setDeletingId(id);

    setTimeout(() => {
      const deleteIndex = createdCards.findIndex((card) => card.id === id);
      createdCards.splice(deleteIndex, 1);
      const copyOfCards = [...createdCards];
      setCreatedCards(copyOfCards);
      setDeletingId(null);
    }, 200);
  };

  const navigate = useNavigate();

  const onSubmitCards = async () => {
    try {
      const filteredFlashcards: CreateQACard[] = createdCards.map((card) => ({
        question: card.question,
        answer: card.answer,
      }));

      const createFlashCardSet: CreateFlashCardSet = {
        title: inputTitle,
        description: inputDescription,
        progress: 0,
        date: selectedDate.format("YYYY-MM-DD"),
        flashcards: filteredFlashcards,
      };
      console.log(createFlashCardSet);

      const response = await fetch(`${API_BASE_URL}/sets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createFlashCardSet),
      });

      const data = await response.json();
      console.log("Post successful:", data);
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/all-study-cards");
    }
  };

  return (
    <>
      <Box className="pb-6">
        <Box className="justify-between items-center flex mx-auto">
          <h1 className="mt-10 ml-20 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span className="text-white">Create {}</span>
            <span className="text-blue-600 dark:text-blue-500">
              flashcard set 📂
            </span>
          </h1>
          <button
            className="mt-4 mr-4 px-10 py-2 h-14 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transform transition-all duration-300 hover:scale-105"
            onClick={onSubmitCards}
          >
            Create Set
          </button>
        </Box>
      </Box>
      <Box className="w-full mx-auto p-2 place-items-center">
        <Box className="flex-col w-4/5 justify-center border-1 border-blue-300 items-center bg-gray-800 text-white p-8 rounded-lg shadow-lg">
          <p className="text-lg font-bold mb-2">Studycard Title:</p>

          <TextField
            sx={{
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
            }}
            placeholder="Enter a title e.g: 'Programming - Chapter 22: Dynamic memory allocation'"
            variant="outlined"
            fullWidth
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            className="mb-8 bg-gray-700 rounded-md outline-none"
          />

          <p className="text-lg font-bold mb-2 mt-8">Studycard Description:</p>

          <TextField
            sx={{
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
            }}
            placeholder="Add a description..."
            fullWidth
            multiline
            rows={4}
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
            className="mb-8 bg-gray-700  rounded-md outline-none"
          />
          <p className="text-lg font-bold mb-2 mt-8">Set Your Deadline:</p>
          <Box className="flex justify-between items-center">
            <DatePicker
              className="w-full"
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
          </Box>

          <Box className="mt-12">
            {createdCards.map((qaCard) => (
              <Fade in={deletingId !== qaCard.id} timeout={400} key={qaCard.id}>
                <Box>
                  <AddFlashCard
                    cardId={qaCard.id}
                    handleChange={handleCardChange}
                    handleDelete={handleDelete}
                  />
                </Box>
              </Fade>
            ))}
            <Box className="flex justify-center">
              <button
                className="mt-4 px-6 py-2 h-12 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transform transition-all duration-300 hover:scale-105"
                onClick={onAdd}
              >
                Add a card
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateStudyCardsPage;
