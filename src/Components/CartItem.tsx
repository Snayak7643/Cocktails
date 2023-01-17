import React, { useContext } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import CartContext from "../Contexts/cartContext";
import { Increase, Decrease, Remove, Clear } from "../Reducers/actions";

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
            <h3>{name}</h3>
            <div className="cart-btn">
              <button
                onClick={() => {
                  dispatch(Increase(id));
                }}
              >
                <FcCollapse />
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => {
                  if (quantity === 1) {
                    dispatch(Remove(id));
                    return;
                  }
                  dispatch(Decrease(id));
                }}
              >
                <FcExpand />
              </button>
            </div>
          </div>
        );
      })}
      <div style={{ textAlign: "center" }}>
        <button
          className="btn primary-btn "
          onClick={() => {
            dispatch(Clear());
          }}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

export default CartItem;
