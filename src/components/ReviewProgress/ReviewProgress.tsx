import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ClassNames } from "@emotion/react";
import { FlashCardSet } from "../../config/types";
import { API_BASE_URL } from "../../config/constants";

const calculateDaysLeft = (targetDate: string): number => {
  const today = new Date();
  const target = new Date(targetDate);
  const difference = target.getTime() - today.getTime();
  return Math.max(0, Math.ceil(difference / (1000 * 60 * 60 * 24))); // Ensure no negative values
};

const ReviewProgress = () => {
  const [cards, setCards] = useState<FlashCardSet[]>([]);

  useEffect(() => {
    const fetchAllSets = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/sets`);
        const data = await response.json();
        console.log("Fetch successful:", data);
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSets();
  }, []);

  return (
    <Box sx={{ width: "100%" }} className="bg-gray-800 p-4 w-full rounded-lg">
      <h1 className="text-2xl pr-32 pb-8">Review Progress</h1>
      <div>
        {cards.map((card: FlashCardSet) => {
          const daysLeft = calculateDaysLeft(card.date); // Use the helper function
          return (
            <div key={card.id} className="pb-8">
              <h2 className="text-xl text-gray-300">{card.title}</h2>
              <Typography variant="body2" className="text-xs text-gray-300">
                {daysLeft > 0
                  ? `Nearest test is in: ${daysLeft} day${
                      daysLeft === 1 ? "" : "s"
                    }`
                  : "The day is here or has passed!"}
              </Typography>
              <Box className="flex items-center space-x-4 mt-2">
                <LinearProgress
                  variant="determinate"
                  value={card.progress}
                  sx={{
                    height: 25,
                    borderRadius: 5,
                    backgroundColor: "grey.800",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 5,
                      backgroundColor: "#8a2be2",
                    },
                  }}
                  className="w-full"
                />
                <Typography variant="body1" gutterBottom>
                  {card.progress}%
                </Typography>
              </Box>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default ReviewProgress;
