import React, { useCallback, useState, useEffect } from "react";
import { cocktailType } from "../Type";
import { ALL_URL } from "../Constants/URL";

const useFetchOnSearch = () => {
  const [searchTerm, setSearchterm] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [cocktails, setCocktails] = useState<cocktailType[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchterm(event.target.value);
  };

  const fetchCocktails = useCallback(async () => {
    setLoading(true);
    try {
      console.log("fetching");
      const response = await fetch(ALL_URL + searchTerm);
      const res = await response.json();
      if (res.drinks) {
        const desiredCocktails = res.drinks.map((drink: any) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            alcoholic: strAlcoholic,
            glass: strGlass,
            img: strDrinkThumb,
          };
        });
        setCocktails(desiredCocktails);
        setLoading(false);
        return;
      }
      setCocktails([]);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm, fetchCocktails]);

  return { cocktails, loading, searchTerm, handleChange };
};

export { useFetchOnSearch };
