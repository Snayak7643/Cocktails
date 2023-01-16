import ACTIONS from "../Constants/actionNames";
import { cocktailType } from "../Type";

export const Add = (cocktail: cocktailType) => {
  const { id, name, img } = cocktail;
  return { type: ACTIONS.ADD, payload: { id, name, img } };
};

export const Increase = (id: number) => {
  return { type: ACTIONS.ADD, payload: { id } };
};
