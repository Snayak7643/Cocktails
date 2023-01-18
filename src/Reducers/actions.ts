import ACTIONS from "../Constants/actionNames";
import { cocktailType, stateType } from "../Type";

export const add = (cocktail: cocktailType) => {
  const { id, name, img } = cocktail;
  const price: number = 100 + name.length;
  return { type: ACTIONS.ADD, payload: { id, name, img, price } };
};

export const increase = (id: number) => {
  return { type: ACTIONS.INCREASE, payload: { id } };
};

export const decrease = (id: number) => {
  return { type: ACTIONS.DECREASE, payload: { id } };
};

export const remove = (id: number) => {
  return { type: ACTIONS.REMOVE, payload: { id } };
};

export const clear = () => {
  return { type: ACTIONS.CLEAR, payload: {} };
};

export const onLoad = (cartState: stateType) => {
  return { type: ACTIONS.ON_LOAD, payload: { cartState } };
};
