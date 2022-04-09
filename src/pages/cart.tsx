import { useContext, useEffect } from "react";
import GameItem from "../components/game";
import cartContext from "../context/cartContext";

export default () => {
  const { cart } = useContext(cartContext);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  function getTotal() {
    let total = 0;
    cart.forEach((g) => {
      total += Number(g.price.split("$")[1]);
    });
    return total.toFixed(2);
  }
  return (
    <div>
      <h1 className="text-6xl font-bold">cart</h1>
      <h2 className="text-4xl font-bold">Total:{getTotal()}</h2>
      <div>
        {cart.map((g) => (
          <GameItem key={g.link} game={g} />
        ))}
      </div>
    </div>
  );
};
