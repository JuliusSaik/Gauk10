import React from "react";
import StudyCardSet from "../components/StudyCardSet/StudyCardSet";
import { cards } from "./mock/mockStudyCardSets";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FlashCardSet } from "../config/types";

const StudyCardSetsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen text-white flex flex-col">
        <section className="container mx-auto flex flex-col justify-between gap-2 pb-[20rem]">
          <div className="w-full px-[2.5rem]">
            <Box className="flex justify-between items-center mb-10">
              <Box>
                <h1 className="mt-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                  Your {}
                  <span className="text-blue-600 dark:text-blue-500">
                    Studycards 📂
                  </span>
                </h1>
              </Box>
              <button
                className="mt-4 px-6 py-2 h-12 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transform transition-all duration-300 hover:scale-105"
                onClick={() => navigate(`/create-study-card`)}
              >
                Create Study Cards
              </button>
            </Box>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full">
              {cards.map((card: FlashCardSet) => (
                <StudyCardSet
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  date={card.date}
                  id={card.id}
                  icon={card.icon}
                  progress={card.progress}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StudyCardSetsPage;
