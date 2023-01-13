import React from "react";
import { Link } from "react-router-dom";
import { cocktailType } from "../Type";

type PropType = {
  cocktail: cocktailType;
};

const Card: React.FunctionComponent<PropType> = ({ cocktail }) => {
  const { id, name, img, glass, alcoholic } = cocktail;
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt="CocktailName" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <Link to="/cocktail" state={{ id }}>
          <button className="btn btn-primary btn-details">Details</button>
        </Link>
      </div>
    </article>
  );
};

export default Card;
