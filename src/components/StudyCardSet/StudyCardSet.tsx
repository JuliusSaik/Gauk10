import { useNavigate } from "react-router-dom";
import { iconsList } from "../../pages/mock/IconsSet";

export interface CardSet {
  id: string;
  icon: number;
  title: string;
  description: string;
  date: string;
  progress: number;
}

const StudyCardSet: React.FC<CardSet> = ({
  title,
  description,
  date,
  id,
  icon,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/study-cards/${id}`);
  };

  return (
    <>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-140 flex items-start space-x-4">
        <div className="bg-blue-600 p-3 rounded-lg mr-2">
          <img
            src={iconsList[icon]}
            alt="icon"
            className="w-28 h-28 filter invert"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm my-2">{description}</p>
          <p className="text-xs italic text-gray-400">{date}</p>

          <button
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transform transition-all duration-300 hover:scale-105"
            onClick={handleClick}
          >
            Start Learning
          </button>
        </div>
      </div>
    </>
  );
};

export default StudyCardSet;
