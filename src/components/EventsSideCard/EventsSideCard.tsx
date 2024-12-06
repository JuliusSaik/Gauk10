import React from "react";
import { SubjectCardsMock } from "../../pages/mock/subjectPropsSet";

const EventsSideCard = () => {
  const events = SubjectCardsMock;

  return (
    <div>
      {events.map((event) => (
        <div className="my-6 p-3 bg-gray-700 rounded-lg">
          <div className="flex flex-col items-left">{event.title}</div>
          <div className="flex flex-col items-left">{event.date}</div>
        </div>
      ))}
    </div>
  );
};
console.log("Hello world");

export default EventsSideCard;
