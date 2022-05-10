import { combineReducers } from "redux";
import productReducer from "./Product/reducer";
import cartReducer from "./Cart/reducer";

const rootReducer = combineReducers({
  productReducer: productReducer,
  cartReducer: cartReducer,
});

export default rootReducer;
