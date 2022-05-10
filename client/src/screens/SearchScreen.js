import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchedProducts } from "../redux/Product/actions";
import styles from "../styles/SearchScreen.module.css";
import Header from "../components/Header";

function SearchScreen(props) {
  const [searchParams] = useSearchParams();
  const text = searchParams.get("text");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchSearchedProducts(text));
    }
  }, []);

  return (
    <div className={styles.search_page}>
      <Header />
      <div className={styles.summary_container}>
        Showing {products.length} items for {text}
      </div>
      <div className={styles.products_filters_container}>
        <div className={styles.filter_container}>
          <div className={styles.clear_filter}>
            <p>Filters</p>
            <button onClick={() => {}}>Clear All</button>
          </div>
        </div>
        <div className={styles.products_container}>
          <div className={styles.products_grid_container}>
            {products.map((product) => (
              <div className={styles.product_card} key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <div className={styles.product_card_head}>
                    <img
                      src="https://img.tatacliq.com/images/i7/437Wx649H/MP000000011689316_437Wx649H_202201062059231.jpeg"
                      alt="error"
                    />
                  </div>
                  <div className={styles.product_card_body}>
                    <p className={styles.product_title}>{product.title}</p>
                    <p className={styles.product_description}>
                      {product.description}
                    </p>
                    <p className={styles.product_price}>Rs. {product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchScreen;
