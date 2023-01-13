import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { cocktailDetailType } from "../Type";
import { SINGLE_URL } from "../Constants/URL";
import Loader from "../Components/Loader";

const Cocktail = () => {
  const location = useLocation();
  const { id } = location.state;

  //Thinking of creating a new Custom Hook
  const [loading, setLoading] = useState<boolean>(true);
  const [cocktail, setCocktail] = useState<cocktailDetailType>(
    {} as cocktailDetailType
  );

  useEffect(() => {
    const fetchTheCocktail = async () => {
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
        setLoading(false);
      } catch (error) {
        alert(error);
        setLoading(false);
      }
    };
    fetchTheCocktail();
  }, [id]);

  //Custom Hook

  const { name, category, glass, alcoholic, img, ingredients, instructions } =
    cocktail;

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="section cocktail-section">
      <Link to="/">
        <button className="btn btn-primary">back home</button>
      </Link>
      <h2 className="section-title">Cocktail-Name</h2>
      <div className="drink">
        <img src={img} alt="Cocktail" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name :</span> {name}
          </p>
          <p>
            <span className="drink-data">Category :</span> {category}
          </p>
          <p>
            <span className="drink-data">Info :</span> {alcoholic}
          </p>
          <p>
            <span className="drink-data">Glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">Instructons :</span> {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients :</span>
            {ingredients[0]}, {ingredients[1]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cocktail;
