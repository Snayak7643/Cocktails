import React from "react";

const Cocktail = () => {
  return (
    <section className="section cocktail-section">
      <button className="btn btn-primary">back home</button>
      <h2 className="section-title">Cocktail-Name</h2>
      <div className="drink">
        <img src="" alt="Cocktail" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name :</span> NAME
          </p>
          <p>
            <span className="drink-data">Category :</span> CATEGORY
          </p>
          <p>
            <span className="drink-data">Info :</span> INFO
          </p>
          <p>
            <span className="drink-data">Glass :</span> GLASS
          </p>
          <p>
            <span className="drink-data">Instructons :</span> INSTRUCTIONS
          </p>
          <p>
            <span className="drink-data">Ingredients :</span>
            INGREDIENTS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cocktail;
