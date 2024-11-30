import React from "react";
import ReviewProgress from "../components/ReviewProgress/ReviewProgress";
import { Box } from "@mui/material";

const DashboardPage = () => {
  return (
    <>
      <Box className="max-w-full rounded-lg">
        <ReviewProgress />
      </Box>
    </>
  );
};

export default DashboardPage;
