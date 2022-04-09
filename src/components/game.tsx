import { FC } from "react";
import { game } from "../pages";

interface GameProps {
  game: game;
  addItem?: (game: game) => void;
}
const GameItem: FC<GameProps> = ({
  game: { img, link, name, price },
  addItem,
}) => {
  return (
    <div className="flex flex-col items-center p-6 mt-6 border w-96 rounded-xl ">
      <img src={img} alt={name} width={188} />
      <h3 className="text-2xl font-bold my-2">{name} &rarr;</h3>
      <div className="flex items-center">
        <p className="text-xl mr-5">{price}</p>
        {addItem && (
          <button
            onClick={() => addItem({ img, link, name, price })}
            className="flex bg-blue-500 text-white p-2 rounded-md group "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="hidden group-hover:block">add to cart</span>
          </button>
        )}
      </div>
    </div>
  );
};
export default GameItem;
