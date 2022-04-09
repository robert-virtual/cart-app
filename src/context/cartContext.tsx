import { createContext } from "react";
import { game } from "../pages";

const cartContext = createContext<{
  cart: game[];
  setCart: any;
}>({ cart: new Array<game>(), setCart: () => {} });

// const cartProvider: FC = ({ children }) => {
//   return (<cartContext>
//   {children}
//   <cartContext/>);
// };
export default cartContext;
