import React from "react";

const Card = () => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src="" alt="CocktailName" />
      </div>
      <div className="cocktail-footer">
        <h3>Name</h3>
        <h4>Glass</h4>
        <p>Info</p>
        <button className="btn btn-primary btn-details">details</button>
      </div>
    </article>
  );
};

export default Card;
