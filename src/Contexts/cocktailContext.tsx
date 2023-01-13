import { createContext } from "react";
import { cocktailType } from "../Type";

const CocktailContext = createContext<{
  cocktails: cocktailType[];
  loading: boolean;
}>({ cocktails: [], loading: true });

export default CocktailContext;
