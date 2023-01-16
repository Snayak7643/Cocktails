import ACTIONS from "../Constants/actionNames";
import { actionType, stateType } from "../Type";

const cartReducer = (state: stateType, action: actionType) => {
  const { id } = action.payload;
  const cocktail = state.cartCocktails.filter((cocktail) => {
    return id === cocktail.id;
  });

  console.log("reducer");

  switch (action.type) {
    case ACTIONS.ADD: {
      if (cocktail.length === 0) {
        return {
          ...state,
          cartCocktails: [
            ...state.cartCocktails,
            {
              id,
              name: action.payload.name,
              img: action.payload.img,
              price: 100,
              quantity: 1,
            },
          ],
          totalQuantity: state.totalQuantity + 1,
          totalAmount: state.totalAmount + 100,
        };
      }
      return {
        ...state,
        cartCocktails: state.cartCocktails.map((cocktail) => {
          if (id === cocktail.id) {
            return {
              ...cocktail,
              quantity: cocktail.quantity + 1,
            };
          }
          return cocktail;
        }),
        totalQuantity: state.totalQuantity + 1,
        totalAmount: state.totalAmount + 100,
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
