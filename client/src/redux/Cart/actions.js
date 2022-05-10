import { ADD_ITEM_TO_CART } from "./Constants";
import { REMOVE_ITEM_FROM_CART } from "./Constants";
import { UPDATE_ITEM_IN_CART } from "./Constants";
import { EMPTY_ITEMS_IN_CART } from "./Constants";

export const addItemToCart = (id, quantity = 1) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: { id, quantity },
  };
};

export const removeItemFromCart = (id) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: { id },
  };
};

export const updateItemInCart = (id, quantity = 1) => {
  return {
    type: UPDATE_ITEM_IN_CART,
    payload: { id, quantity },
  };
};

export const emptyItemsInCart = () => {
  return {
    type: EMPTY_ITEMS_IN_CART,
  };
};
