import Axios from "../../axios";
import { PRODUCT_LIST_REQUEST } from "./constants";
import { PRODUCT_LIST_SUCCESS } from "./constants";
import { PRODUCT_LIST_FAILURE } from "./constants";

export const fetchProductsRequest = () => {
  return {
    type: PRODUCT_LIST_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: PRODUCT_LIST_FAILURE,
    payload: error,
  };
};

export const fetchSearchedProducts = (searchString) => {
  return function (dispatch) {
    dispatch(fetchProductsRequest());
    Axios.get(`/products?search=${searchString}`)
      .then((response) => {
        console.log("data received");
        dispatch(fetchProductsSuccess(response.data.description));
      })
      .catch((err) => console.log("error receiving data from server: ", err));
  };
};
