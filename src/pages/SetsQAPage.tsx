import React, { useState } from "react";
import StudyCardList from "../components/StudyCard/StudyCardList";
import { SampleCards } from "./mock/SampleCards";
import { Box } from "@mui/material";

const SetsQAPage = () => {
  const sampleCards = SampleCards;
  const [cards, setCards] = useState(sampleCards);
  return (
    <Box className="w-full h-full flex justify-center items-center">
      <StudyCardList cards={cards} />
    </Box>
  );
};

export default SetsQAPage;
