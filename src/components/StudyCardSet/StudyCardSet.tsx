import { useNavigate } from "react-router-dom";

export interface CardSet {
  id: string;
  icon: string;
  title: string;
  description: string;
  date: string;
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
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80 mt-10">
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
    </>
  );
};

export default StudyCardSet;
