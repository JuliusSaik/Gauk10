import React, { useEffect, useState } from "react";
import { SubjectCardsMock } from "../../pages/mock/subjectPropsSet";
import { FlashCardSet } from "../../config/types";
import { API_BASE_URL } from "../../config/constants";

const EventsSideCard = () => {
  const [cards, setCards] = useState<FlashCardSet[]>([]);

  useEffect(() => {
    const fetchAllSets = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/sets`);
        const data = await response.json();
        console.log("Fetch successful:", data);
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllSets();
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <div className="my-6 p-3 bg-gray-700 rounded-lg">
          <div className="flex flex-col items-left">{card.title}</div>
          <div className="flex flex-col items-left">{card.date}</div>
        </div>
      ))}
    </div>
  );
};
console.log("Hello world");

export default EventsSideCard;
