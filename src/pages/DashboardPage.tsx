import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReviewProgress from "../components/ReviewProgress/ReviewProgress";
import CalendarBlock from "../components/Calendar/Calendar";
import { API_BASE_URL } from "../config/constants";
import { FlashCardSet } from "../config/types";
import { iconsList } from "./mock/IconsSet";

const DashboardPage = () => {
  const [sets, setSets] = useState<FlashCardSet[]>([]);

  useEffect(() => {
    const fetchAllSets = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/sets`);
        const data = await response.json();
        console.log("Fetch successful:", data);
        setSets(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSets();
  }, []);

  return (
    <div className="flex justify-between p-12 space-x-8">
      <div className="flex-col">
        <p className="text-3xl font-bold mb-6">Recent Study Cards</p>
        <div className="flex flex-wrap gap-2">
          {sets.slice(0, 3).map((set) => (
            <div
              key={set.id}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex items-start space-x-4"
            >
              <div className="bg-blue-600 p-3 rounded-lg mr-2">
                <img
                  src={iconsList[set.id]}
                  alt="icon"
                  className="w-10 h-10 filter invert"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{set.title}</h2>
                <p className="text-sm my-2">{set.description}</p>
                <p className="text-xs italic text-gray-400">{set.date}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-3xl font-bold mb-6 mt-16">Your Test Calendar</p>
        <Box className="min-h-screen">
          <CalendarBlock />
        </Box>
      </div>
      <Box className="flex-1">
        <ReviewProgress />
      </Box>
    </div>
  );
};

export default DashboardPage;
