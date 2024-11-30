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
      <Box className="overflow-y-hidden overflow-x-clip">
        <NavigationSideBar />
      </Box>

      <Box component="main" className="p-8 overflow-y-scroll overflow-x-clip">
        <Box>{routes}</Box>
      </Box>
    </Box>
  );
};

export default App;
