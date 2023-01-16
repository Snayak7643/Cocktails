import React from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";

const CartItem = () => {
  return (
    <>
      <div className="item-container">
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
    </>
  );
};

export default CartItem;
