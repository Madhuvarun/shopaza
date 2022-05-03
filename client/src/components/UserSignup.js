import React, { useRef } from "react";
import styles from "../styles/UserSignup.module.css";
import { Button, OutlinedInput } from "@mui/material";
import Axios from "../axios";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function UserSignup(props) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  async function handleFormSubmission(e) {
    if (nameRef.current.value.trim() === "") {
      toast("Name cannot be empty");
      return;
    }
    if (emailRef.current.value.trim() === "") {
      toast("Email cannot be empty");
      return;
    }
    if (passwordRef.current.value.trim() === "") {
      toast("Password cannot be empty");
      return;
    }
    const response = await Axios.post("/auth/signup", {
      name: nameRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
    });

    if (
      response.data.hasOwnProperty("status") &&
      response.data.status === "failure"
    ) {
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
        <div className={styles.signup_container}>
          <p className={styles.signup_container_header}>Sign Up</p>
          <div className={styles.name_container}>
            <OutlinedInput
              placeholder="name"
              size="small"
              style={{ width: 300 }}
              inputRef={nameRef}
            />
          </div>

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
              register
            </Button>
          </div>
          <div className={styles.links}>
            <div className={styles.existing_user}>
              <span>Already have an account?&nbsp;</span>
              <Link to="/user/login">Sign in</Link>
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
