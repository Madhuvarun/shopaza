import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = rootReducer;

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
