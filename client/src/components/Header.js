import React from "react";
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";

import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header(props) {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_left}>
        <Link to="/" className={styles.navbar_logo}>
          <ShoppingBasketOutlinedIcon
            fontSize="large"
            style={{ color: "#008060" }}
          />

          <span className={styles.navbar_text}>shopaza</span>
        </Link>
      </div>
      <div className={styles.navbar_center}>
        <div className={styles.navbar_search}>
          <div className={styles.navbar_search_input}>
            <input type="search" placeholder="search products" />
          </div>
          <div className={styles.navbar_search_icon}>
            <button>
              <SearchOutlinedIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.navbar_right}>
        <div className={styles.navbar_links}>
          <div className={styles.login_link}>
            <Link to="/user/login">
              <Button
                variant="contained"
                style={{ color: "#fff", backgroundColor: "#008060" }}
                size="small"
              >
                Login
              </Button>
            </Link>
          </div>
          <div className={styles.signup_link}>
            <Link to="/user/signup">
              <Button
                variant="contained"
                style={{ color: "#fff", backgroundColor: "#008060" }}
                size="small"
              >
                Sign up
              </Button>
            </Link>
          </div>
          <div className={styles.cart_container}>
            <button className={styles.cart_button}>
              <ShoppingCartOutlinedIcon
                fontSize="large"
                sx={{ color: "#fff" }}
              />
            </button>
            <span className={styles.cart_quantity}>20</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
