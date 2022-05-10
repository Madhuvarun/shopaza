import { PRODUCT_LIST_REQUEST } from "./constants";
import { PRODUCT_LIST_SUCCESS } from "./constants";
import { PRODUCT_LIST_FAILURE } from "./constants";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
        error: null,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: null,
      };
    case PRODUCT_LIST_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
