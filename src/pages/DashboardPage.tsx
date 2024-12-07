import { Box } from "@mui/material";
import React from "react";
import ReviewProgress from "../components/ReviewProgress/ReviewProgress";
import { iconsList } from "./mock/IconsSet";
import { cards } from "./mock/mockStudyCardSets";
import CalendarBlock from "../components/Calendar/Calendar";

const DashboardPage = () => {
  return (
    <div>
      <div className="relative">
        <Box className="max-w-full absolute inset-y-0 right-0 rounded-lg">
          <ReviewProgress />
        </Box>
      </div>
      <div className="space-y-5">
        <div className="flex flex-wrap gap-2 translate-x-[-1%]">
          {cards.slice(0, 3).map((card) => (
            <div
              key={card.id}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex items-start space-x-4"
            >
              <div className="bg-blue-600 p-3 rounded-lg mr-2">
                <img
                  src={iconsList[card.icon]}
                  alt="icon"
                  className="w-10 h-10 filter invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="text-sm my-2">{card.description}</p>
                <p className="text-xs italic text-gray-400">{card.date}</p>
              </div>
            </div>
          ))}
        </div>
        <Box className="w-[875px] translate-x-[-1%]">
          <CalendarBlock />
        </Box>
      </div>
    </div>
  );
};

export default DashboardPage;
