import React, { useContext } from "react";
import CocktailContext from "../Contexts/cocktailContext";
import Card from "./Card";
import Loader from "./Loader";

const CocktailList = () => {
  const { cocktails, loading } = useContext(CocktailContext);

  if (loading) {
    return <Loader />;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          return <Card key={cocktail.id} cocktail={cocktail} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
