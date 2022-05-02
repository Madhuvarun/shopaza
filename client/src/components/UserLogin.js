import React from "react";
import styles from "../styles/UserLogin.module.css";
import { Button, OutlinedInput } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function UserLogin(props) {
  return (
    <div className={styles.page}>
      <div className={styles.logo_container}>
        <Link to="/">Shopaza</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.login_container}>
          <p className={styles.login_container_header}>Sign In</p>
          <div className={styles.email_container}>
            <OutlinedInput
              placeholder="email address"
              size="small"
              style={{ width: 300 }}
            />
          </div>

          <div className={styles.password_container}>
            <OutlinedInput
              placeholder="password"
              size="small"
              style={{ width: 300 }}
            />
          </div>
          <div className={styles.submit_btn_container}>
            <Button variant="contained" size="medium">
              Login
            </Button>
          </div>
          <div className={styles.links}>
            <div className={styles.new_user}>
              <span>New user?&nbsp;</span>
              <Link to="/user/signup">Register here</Link>
            </div>

            <div className={styles.forgot_password}>
              <span>Forgot password?&nbsp;</span>
              <Link to="/forgotpassword">Reset here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
