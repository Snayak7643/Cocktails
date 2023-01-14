import { createContext } from "react";
import { initialCocktailState } from "../Constants/initialState";
import { cocktailContextType } from "../Type";

const CocktailContext =
  createContext<cocktailContextType>(initialCocktailState);

export default CocktailContext;
