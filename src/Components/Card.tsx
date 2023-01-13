import React from "react";
import { cocktailType } from "../Type";

type PropType = {
  cocktail: cocktailType;
};

const Card: React.FunctionComponent<PropType> = ({ cocktail }) => {
  const { name, img, glass, alcoholic } = cocktail;
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt="CocktailName" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <button className="btn btn-primary btn-details">Details</button>
      </div>
    </article>
  );
};

export default Card;
