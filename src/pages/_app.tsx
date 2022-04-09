import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import cartContext from "../context/cartContext";
import { game } from ".";

function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<game[]>(new Array<game>());
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <Component {...pageProps} />
    </cartContext.Provider>
  );
}

export default MyApp;
