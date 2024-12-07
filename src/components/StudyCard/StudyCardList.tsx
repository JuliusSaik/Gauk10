import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import StudyCard from "./StudyCard";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import { useNavigate } from "react-router-dom";

export interface Card {
  id: number;
  question: string;
  answer: string;
}

interface StudyCardListProps {
  cards: Card[];
}

const StudyCardList: React.FC<StudyCardListProps> = ({ cards }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    fade: true,
    arrows: false,
  };
  const [CorrectCounter, setCorrectCounter] = useState(0);
  const [Counter, setCounter] = useState(0);
  const slider = useRef<Slider | null>(null);
  const navigate = useNavigate();
  const incorrect = () => {
    setCounter(Counter + 1);
    slider.current!.slickNext();
  };
  const correct = () => {
    setCorrectCounter(CorrectCounter + 1);
    setCounter(Counter + 1);
    slider.current!.slickNext();
  };
  const GoBack = () => {
    navigate(`/study-cards`);
  };
  const refreshPage = () => {
    window.location.reload();
  };
  if (Counter == cards.length) {
    return (
      <div className="flex flex-col items-center justify-center absolute inset-0">
        <div
          className="h-72 w-96 flex flex-col font-bold justify-center 
        text-center items-center bg-blue-900 text-white rounded-lg 
        m-auto absolute inset-0 translate-y-[-40%] translate-x-[40%] space-y-10 text-lg"
        >
          <div>You learned</div>
          <div className="text-5xl">
            {CorrectCounter}/{Counter} <br />
          </div>
          <div>Of the questions</div>
        </div>
        <div className="mt-60 font-bold translate-y-[60%]">Try Again?</div>
        <div className="ml-50 translate-y-[20%]">
          <IconButton
            aria-label="check"
            sx={{ fontSize: 50, color: "white" }}
            onClick={refreshPage}
          >
            <ReplayCircleFilledIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div className="ml-96 translate-x-[190%] translate-y-[-82%]">
          <div className="font-bold">Go Back</div>
          <div>
            <IconButton
              aria-label="check"
              sx={{ fontSize: 50, color: "white" }}
              onClick={GoBack}
            >
              <AssignmentReturnIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-one">
        <Slider ref={slider} {...settings}>
          {cards.map((card) => {
            return (
              <StudyCard
                key={card.id}
                question={card.question}
                answer={card.answer}
                id={card.id}
              />
            );
          })}
        </Slider>
        <Stack direction="row" spacing={15} marginTop={70} marginLeft={14}>
          <IconButton
            aria-label="cancel"
            sx={{ fontSize: 50 }}
            color="warning"
            onClick={incorrect}
          >
            <CancelIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="check"
            sx={{ fontSize: 50 }}
            color="success"
            onClick={correct}
          >
            <CheckCircleIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </div>
    );
  }
};

export default StudyCardList;
