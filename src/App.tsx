import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import Router from "./config/Router/Router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

const AppContent: React.FC = () => {
  const { routes } = Router();

  return (
    <Box className="flex flex-col h-screen">
      <Box className="flex flex-grow">
        <Box>{routes}</Box>
      </Box>
    </Box>
  );
};

export default App;
