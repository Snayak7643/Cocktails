import { useEffect, useState, useCallback } from "react";
import { cocktailDetailType } from "../Type";
import { SINGLE_URL } from "../Constants/URL";

const useFetchWithId = (id: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [cocktail, setCocktail] = useState<cocktailDetailType>(
    {} as cocktailDetailType
  );

  const fetchTheCocktail = useCallback(async () => {
    console.log("fecthing single");
    setLoading(true);
    try {
      const response = await fetch(SINGLE_URL + id);
      const res = await response.json();
      const drink = res.drinks;
      if (drink && drink.length) {
        const {
          idDrink,
          strDrink,
          strCategory,
          strAlcoholic,
          strGlass,
          strDrinkThumb,
          strInstructions,
        } = drink[0];
        const { strIngredient1, strIngredient2 } = drink[0];
        const ingredients = [strIngredient1, strIngredient2];
        setCocktail({
          id: idDrink,
          name: strDrink,
          category: strCategory,
          alcoholic: strAlcoholic,
          glass: strGlass,
          img: strDrinkThumb,
          ingredients,
          instructions: strInstructions,
        });
        setLoading(false);
        return;
      }
      setCocktail({} as cocktailDetailType);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchTheCocktail();
  }, [id, fetchTheCocktail]);

  return { loading, cocktail };
};

export { useFetchWithId };
