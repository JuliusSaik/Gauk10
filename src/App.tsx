import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import Router from "./config/Router/Router";
import NavigationSideBar from "./components/NavigationSideBar/NavigationSideBar";

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Box>
  );
}

const AppContent: React.FC = () => {
  const { routes } = Router();

  return (
    <Box className="flex h-screen ">
      <Box className="overflow-hidden w-64 ">
        <NavigationSideBar />
      </Box>

      <Box
        component="main"
        className="flex-1 p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <Box>{routes}</Box>
      </Box>
    </Box>
  );
};

export default App;
