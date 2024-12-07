import React from "react";
import CalendarBlock from "../components/Calendar/Calendar";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import EventsSideCard from "../components/EventsSideCard/EventsSideCard";

const TestCalendarPage = () => {
  return (
    <>
      <div className="flex h-full w-full gap-8 items-center mx-6">
        <div className="min-h-screen text-white flex flex-col w-3/4">
          <section className="container mx-auto flex flex-col justify-between gap-8">
            <div className="w-full px-[2.5rem]">
              <Box className="flex justify-between items-center">
                <Box>
                  <h1 className="mt-2 mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">
                    Calendar{" "}
                    <span className="text-blue-600 dark:text-blue-500">
                      {" "}
                      and Events 📅
                    </span>
                  </h1>
                </Box>
              </Box>
            </div>
            <Box className="ml-10">
              <CalendarBlock />
            </Box>
          </section>
        </div>

        <div className="bg-gray-800 flex flex-col items-center w-96 text-white rounded-lg">
          <EventsSideCard />
        </div>
      </div>
    </>
  );
};

export default TestCalendarPage;
