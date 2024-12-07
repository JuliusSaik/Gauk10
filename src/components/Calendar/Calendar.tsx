import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const CalendarBlock = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [alertMessage, setAlertMessage] = useState<React.ReactNode>(""); // Use React.ReactNode here
  const [showAlert, setShowAlert] = useState(false); // To control the visibility of the alert

  const events = [
    {
      date: new Date(2024, 11, 12),
      title: "Kompiuterinė grafika",
      description: "Kontrolinis",
    },
    {
      date: new Date(2024, 11, 9),
      title: "Procedūrinis Programavimas",
      description: "Projektas",
    },
    {
      date: new Date(2024, 11, 6),
      title: "M. A. P.",
      description: "Kontrolinis",
    },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const getEventForDay = (day: Date) => {
    return events.find(
      (event) =>
        event.date.getFullYear() === day.getFullYear() &&
        event.date.getMonth() === day.getMonth() &&
        event.date.getDate() === day.getDate()
    );
  };

  const days = getDaysInMonth(currentDate);
  const firstDayIndex = days[0].getDay();

  const handleDayClick = (day: Date) => {
    const event = getEventForDay(day);
    if (event) {
      setAlertMessage(
        <div>
          <p className="text-xl font-semibold text-gray-800">{event.title}</p>
          <p className="mt-2 text-lg text-gray-600">{event.description}</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transform transition-all duration-300 hover:scale-105">
            Start Learning
          </button>
        </div>
      );
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full h-full flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-6">
        <button
          onClick={handlePrevMonth}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transform transition-all duration-300 hover:scale-105"
        >
          &lt;
        </button>
        <h2 className="text-3xl font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transform transition-all duration-300 hover:scale-105"
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 text-center text-gray-400 font-medium text-lg mb-4 w-full">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>
      <div
        className="grid grid-cols-7 gap-2 w-full"
        style={{ gridAutoRows: "1fr" }}
      >
        {Array.from({ length: firstDayIndex }).map((_, idx) => (
          <div key={`empty-${idx}`} className="py-4"></div>
        ))}
        {days.map((day) => {
          const event = getEventForDay(day);
          return (
            <div
              key={day.toDateString()}
              className={`relative h-20 w-full flex justify-center items-start rounded-lg shadow-md transition transform hover:scale-105 ${
                day.toDateString() === today.toDateString()
                  ? "bg-blue-600 text-white font-bold"
                  : "bg-gray-700 text-gray-200"
              }`}
              onClick={() => handleDayClick(day)}
            >
              <div>{day.getDate()}</div>
              {event && (
                <div className="absolute rounded-lg w-auto py-1 bg-blue-500 bottom-2 text-xs text-center text-white font-bold px-4 hover:cursor-pointer">
                  {event.title}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Darkened background overlay */}
      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-lg z-50">
            <Stack sx={{ width: "100%" }}>
              <Alert
                severity="info"
                onClose={handleCloseAlert}
                className="text-lg border-0 p-4 rounded-lg shadow-md"
              >
                <div>{alertMessage}</div>
              </Alert>
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarBlock;
