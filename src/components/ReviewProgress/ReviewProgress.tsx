import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { cards } from "../../pages/mock/mockStudyCardSets";
import { CardSet } from "../StudyCardSet/StudyCardSet";
import { ClassNames } from "@emotion/react";

const ReviewMaterial: React.FC<{ progress?: number }> = ({ progress = 0 }) => {
  return (
    <div>
      <Box className="flex items-center space-x-4">
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
          }}
          className="w-full"
        />
        <Typography variant="body1" gutterBottom>
          {progress}%
        </Typography>
      </Box>
    </div>
  );
};

const ReviewProgress = () => {
  return (
    <Box sx={{ width: "100%" }} className="bg-gray-800 p-4 w-full">
      <h1 className="text-3xl p-4">Review progress</h1>
      <div>
        {cards.map((card: CardSet) => (
          <div key={card.id}>
            <h2 className="text-xl text-blue-200">{card.title}</h2>
            <ReviewMaterial progress={card.progress} />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default ReviewProgress;
