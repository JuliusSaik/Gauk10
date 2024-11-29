import React from "react";
import ReviewProgress from "../components/ReviewProgress/ReviewProgress";
import { Box } from "@mui/material";

const DashboardPage = () => {
  return (
    <>
      <Box className="max-w-full">
        <ReviewProgress />
      </Box>
    </>
  );
};

export default DashboardPage;
