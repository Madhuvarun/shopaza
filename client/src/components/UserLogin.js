import React, { useRef } from "react";
import styles from "../styles/UserLogin.module.css";
import { Button, OutlinedInput } from "@mui/material";
import { Link } from "react-router-dom";
import Axios from "../axios";
import toast, { Toaster } from "react-hot-toast";

export default function UserLogin(props) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleFormSubmission(e) {
    if (emailRef.current.value.trim() === "") {
      toast("email cannot be empty");
      return;
    }

    if (passwordRef.current.value.trim() === "") {
      toast("password cannot be empty");
      return;
    }

    const response = await Axios.post("/auth/login", {
      email: emailRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
    });

    if (response.data.status === "failure") {
      toast(response.data.description, {
        style: {
          backgroundColor: "tomato",
          color: "#fff",
        },
      });
    } else if (response.data.status === "success") {
      toast(response.data.description, {
        style: {
          backgroundColor: "mediumseagreen",
          color: "#fff",
        },
      });
    }
  }
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
              inputRef={emailRef}
            />
          </div>

          <div className={styles.password_container}>
            <OutlinedInput
              placeholder="password"
              type="password"
              size="small"
              style={{ width: 300 }}
              inputRef={passwordRef}
            />
          </div>

          <div className={styles.submit_btn_container}>
            <Button
              variant="contained"
              size="medium"
              onClick={(e) => handleFormSubmission(e)}
            >
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

      <Toaster
        toastOptions={{
          style: {
            borderRadius: "2px",
          },
        }}
      />
    </div>
  );
}
