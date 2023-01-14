import React, { createContext } from "react";
import { cocktailType } from "../Type";

const CocktailContext = createContext<{
  cocktails: cocktailType[];
  loading: boolean;
  searchTerm: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}>({ cocktails: [], loading: true, searchTerm: "", handleChange: () => {} });

export default CocktailContext;
