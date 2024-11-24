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
    <Box className="flex h-screen">
      <NavigationSideBar />
      <Box component="main" className="p-8">
        <Box>{routes}</Box>
      </Box>
    </Box>
  );
};

export default App;
