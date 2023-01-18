import ACTIONS from "../Constants/actionNames";
import { cocktailType, stateType } from "../Type";

export const Add = (cocktail: cocktailType) => {
  const { id, name, img } = cocktail;
  const price: number = 100 + name.length;
  return { type: ACTIONS.ADD, payload: { id, name, img, price } };
};

export const Increase = (id: number) => {
  return { type: ACTIONS.INCREASE, payload: { id } };
};

export const Decrease = (id: number) => {
  return { type: ACTIONS.DECREASE, payload: { id } };
};

export const Remove = (id: number) => {
  return { type: ACTIONS.REMOVE, payload: { id } };
};

export const Clear = () => {
  return { type: ACTIONS.CLEAR, payload: {} };
};

export const OnLoad = (cartState: stateType) => {
  return { type: ACTIONS.ON_LOAD, payload: { cartState } };
};
