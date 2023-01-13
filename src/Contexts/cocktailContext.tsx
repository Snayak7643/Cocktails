import { createContext } from "react";
import { cocktailType } from "../Type";

const CocktailContext = createContext<cocktailType[]>([]);

export default CocktailContext;
