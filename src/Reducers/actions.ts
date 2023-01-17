import ACTIONS from "../Constants/actionNames";
import { cocktailType } from "../Type";

export const Add = (cocktail: cocktailType) => {
  const { id, name, img } = cocktail;
  return { type: ACTIONS.ADD, payload: { id, name, img } };
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
