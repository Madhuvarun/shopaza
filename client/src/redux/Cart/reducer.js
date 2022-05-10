import { ADD_ITEM_TO_CART } from "./Constants";
import { REMOVE_ITEM_FROM_CART } from "./Constants";
import { UPDATE_ITEM_IN_CART } from "./Constants";
import { EMPTY_ITEMS_IN_CART } from "./Constants";

const initialState = {
  cartItems: [],
};

function isItemPresentInCart(state, action) {
  let found = false;
  state.cartItems.forEach((item) => {
    if (item.id == action.payload.id) {
      found = true;
    }
  });
  return found;
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const isPresent = isItemPresentInCart(state, action);
      if (!isPresent) {
        return {
          cartItems: [
            ...state.cartItems,
            { id: action.payload.id, quantity: action.payload.quantity },
          ],
        };
      } else {
        return {
          cartItems: state.cartItems.map(function (item) {
            if (item.id == action.payload.id)
              return {
                id: action.payload.id,
                quantity: item.quantity + 1,
              };
            else return { ...item };
          }),
        };
      }
    case REMOVE_ITEM_FROM_CART:
      return {
        cartItems: state.cartItems.filter(
          (item) => item.id != action.payload.id
        ),
      };
    case UPDATE_ITEM_IN_CART:
      return state;
    case EMPTY_ITEMS_IN_CART:
      return {
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
