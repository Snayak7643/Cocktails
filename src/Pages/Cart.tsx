import React, { useContext } from "react";
import CartItem from "../Components/CartItems";
import Total from "../Components/Total";
import CartContext from "../Contexts/cartContext";
import { clear } from "../Reducers/actions";

const CartContainer = () => {
  const { state, dispatch } = useContext(CartContext);
  if (state.cartCocktails.length === 0) {
    return <h3 className="no-item"> No items In The Cart </h3>;
  }
  return (
    <>
      <CartItem />
      <Total />
      <div className="clear-all">
        <button
          className="btn primary-btn "
          onClick={() => {
            dispatch(clear());
          }}
        >
          Clear All
        </button>
      </div>
    </>
  );
};

const Cart = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">Cart</h1>
      <div className="cart-container">
        <CartContainer />
      </div>
    </section>
  );
};

export default Cart;
