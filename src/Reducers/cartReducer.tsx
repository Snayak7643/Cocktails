import ACTIONS from "../Constants/actionNames";
import { actionType, stateType } from "../Type";
import { initialCartState } from "../Constants/initialState";

const cartReducer = (state: stateType, action: actionType) => {
  const { id } = action.payload;
  const cocktail = state.cartCocktails.filter((cocktail) => {
    return id === cocktail.id;
  });
  const price = cocktail.length === 0 ? 0 : cocktail[0].price;

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
              price: action.payload.price,
              quantity: 1,
            },
          ],
          totalQuantity: state.totalQuantity + 1,
          totalAmount: state.totalAmount + action.payload.price,
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
        totalAmount: state.totalAmount + price,
      };
    }

    case ACTIONS.INCREASE: {
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
        totalAmount: state.totalAmount + price,
      };
    }

    case ACTIONS.DECREASE: {
      return {
        ...state,
        cartCocktails: state.cartCocktails.map((cocktail) => {
          if (id === cocktail.id) {
            return {
              ...cocktail,
              quantity: cocktail.quantity - 1,
            };
          }
          return cocktail;
        }),
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - price,
      };
    }

    case ACTIONS.REMOVE: {
      return {
        ...state,
        cartCocktails: state.cartCocktails.filter((cocktail) => {
          return id !== cocktail.id;
        }),
        totalQuantity: state.totalQuantity - 1,
        totalAmount: state.totalAmount - price,
      };
    }

    case ACTIONS.CLEAR: {
      return initialCartState;
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;
