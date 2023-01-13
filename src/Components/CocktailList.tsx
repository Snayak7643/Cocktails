import React, { useContext } from "react";
import CocktailContext from "../Contexts/cocktailContext";
import Card from "./Card";

const CocktailList = () => {
  const cocktails = useContext(CocktailContext);
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
