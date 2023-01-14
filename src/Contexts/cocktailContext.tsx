import { createContext } from "react";
import { cocktailContextType } from "../Type";

const CocktailContext = createContext<cocktailContextType>({
  cocktails: [],
  loading: true,
  searchTerm: "",
  handleChange: () => {},
});

export default CocktailContext;
