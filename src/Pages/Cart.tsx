import React from "react";
import CartItem from "../Components/CartItem";

const Cart = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">Cart</h1>
      <div className="cart-container">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </section>
  );
};

export default Cart;
