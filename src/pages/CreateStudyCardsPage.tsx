import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import AddFlashCard from "../components/AddFlashCard/AddFlashCard";

export interface QACard{
  question: string,
  answer: string,
}

const firstCard: QACard = {
  question: '',
  answer: '',
}




const CreateStudyCardsPage = () => {

  const [createdCards, setCreatedCards] = useState<QACard[]>([firstCard]);


  const onAdd = () => { 
    setCreatedCards([...createdCards, firstCard]);
  }

  return (
    <>
    <Button variant="contained" onClick={onAdd} />

    {createdCards.map(qaCard => (
      <AddFlashCard />

    ))}
    
    </>
  );
};

export default CreateStudyCardsPage;
