import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Contexts/cartContext";
import { Add } from "../Reducers/actions";
import { cocktailType } from "../Type";

type PropType = {
  cocktail: cocktailType;
};

const Card: React.FunctionComponent<PropType> = ({ cocktail }) => {
  const { id, name, img, glass, alcoholic } = cocktail;

  const { dispatch } = useContext(CartContext);

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt="CocktailName" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <Link to={"/cocktail/" + id}>
          <button className="btn btn-primary btn-details">Details</button>
        </Link>
        <div style={{ margin: "0.1rem" }}>
          <button
            className="btn-primary"
            onClick={() => {
              dispatch(Add(cocktail));
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
