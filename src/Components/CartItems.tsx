import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FcExpand, FcCollapse } from "react-icons/fc";
import CartContext from "../Contexts/cartContext";
import { increase, decrease, remove } from "../Reducers/actions";

const CartItem = () => {
  const { state, dispatch } = useContext(CartContext);

  if (state.cartCocktails.length === 0) {
    return <h3>No Items in the Cart</h3>;
  }

  return (
    <>
      {state.cartCocktails.map((cocktail) => {
        const { id, name, img, quantity } = cocktail;

        return (
          <div className="item-container" key={id}>
            <img src={img} alt="cocktail" />
            <div className="item-heading">
              <h3>{name}</h3>
              <Link to={"/cocktail/" + id}>Details</Link>
            </div>
            <div className="cart-btn">
              <button
                onClick={() => {
                  dispatch(increase(id));
                }}
              >
                <FcCollapse />
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => {
                  if (quantity === 1) {
                    dispatch(remove(id));
                    return;
                  }
                  dispatch(decrease(id));
                }}
              >
                <FcExpand />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItem;
