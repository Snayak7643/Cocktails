import React, { createContext } from "react";
import { initialCartState } from "../Constants/initialState";
import { actionType, stateType } from "../Type";

const CartContext = createContext<{
  state: stateType;
  dispatch: React.Dispatch<actionType>;
}>({ state: initialCartState, dispatch: () => null });

export default CartContext;
