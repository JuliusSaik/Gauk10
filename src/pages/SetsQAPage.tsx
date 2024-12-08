import React, { useEffect, useState } from "react";
import StudyCardList from "../components/StudyCard/StudyCardList";
import { SampleCards } from "./mock/SampleCards";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { CreateFlashCardSet, QACard } from "../config/types";
import { API_BASE_URL } from "../config/constants";

const SetsQAPage = () => {
  const [cards, setCards] = useState<QACard[]>([]);

  const setId = useParams<{ setId: string }>().setId;
  if (!setId) {
    console.log("bad id");
  }

  useEffect(() => {
    const fetchSetById = async (id: number) => {
      try {
        console.log("id is: ", id);
        const response = await fetch(`${API_BASE_URL}/sets/${id}`);
        const data: { flashcards: QACard[] } = await response.json();
        console.log("Fetch successful:", data);
        setCards(data.flashcards);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSetById(Number(setId));
  }, [setId]);

  return (
    <Box className="w-full h-full flex justify-center items-center">
      <StudyCardList cards={cards} setId={Number(setId)} />
    </Box>
  );
};

export default SetsQAPage;
