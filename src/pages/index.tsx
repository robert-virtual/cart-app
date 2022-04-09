import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useContext, useEffect } from "react";
import GameItem from "../components/game";
import cartContext from "../context/cartContext";

export interface game {
  img: string;
  link: string;
  price: string;
  name: string;
}
interface HomeProps {
  games: game[];
}
const Home: FC<HomeProps> = ({ games }) => {
  const { cart, setCart } = useContext(cartContext);
  useEffect(() => {
    console.log(games);
  }, []);
  function addItem(game: game) {
    setCart([...cart, game]);
    console.log(cart);
  }
  const router = useRouter();
  function goToCart() {
    router.push("/cart");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Game Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <header className="flex mt-6">
          <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <a className="text-blue-600" href="#">
              Game Shop
            </a>
          </h1>
          <div className="relative cursor-pointer" onClick={goToCart}>
            <span className="absolute -top-4 bg-blue-500 text-white w-6 h-6 rounded-lg">
              {cart.length}
            </span>
            <div className="">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
        </header>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {games.map((game) => (
            <GameItem key={game.link} game={game} addItem={addItem} />
          ))}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Game Shop{" "}
        </a>
      </footer>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://gamestop-api.herokuapp.com/games");
  const games = await res.json();
  console.log(games);

  return {
    props: { games },
  };
}

export default Home;
