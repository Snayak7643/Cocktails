import React, { useContext } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import CartContext from "../Contexts/cartContext";

const CartItem = () => {
  const { state } = useContext(CartContext);

  if (state.cartCocktails.length === 0) {
    return <h3>No Items in the Cart</h3>;
  }

  return (
    <>
      {state.cartCocktails.map((cocktail) => {
        return (
          <div className="item-container" key={cocktail.id}>
            <img src="" alt="cocktail" />
            <h3>Name</h3>
            <div className="cart-btn">
              <button>
                <FcCollapse />
              </button>
              <p>0</p>
              <button>
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
