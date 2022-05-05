import React, { useEffect } from "react";
import Axios from "../axios";
import { useParams } from "react-router-dom";

function SearchScreen(props) {
  const { text } = useParams();

  useEffect(() => {
    async function getProducts() {
      try {
        const result = await Axios.get(`/products?search=${text}`);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, [text]);

  return <div>ProductListScreen</div>;
}

export default SearchScreen;
