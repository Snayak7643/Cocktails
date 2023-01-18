import React, { useContext } from "react";
import CartContext from "../Contexts/cartContext";

const Total = () => {
  const { state } = useContext(CartContext);

  return (
    <>
      <hr />
      <div className="total">
        <h3>Total :</h3>
        <p>$ {state.totalAmount}</p>
      </div>
    </>
  );
};

export default Total;
