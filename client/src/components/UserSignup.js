import React from "react";
import styles from "../styles/UserSignup.module.css";
import { Button, OutlinedInput } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function UserSignup(props) {
  const [userDetails, setUserDetails] = useState({});

  function handleName(e) {
    setUserDetails({
      ...userDetails,
      last_name: e.target.value,
    });
  }
  function handleEmail(e) {
    setUserDetails({
      ...userDetails,
      email_address: e.target.value,
    });
  }
  function handlePassword(e) {
    setUserDetails({
      ...userDetails,
      password: e.target.value,
    });
  }
  async function handleFormSubmission(e) {
    if (userDetails.name.trim() === "") {
      toast("Name cannot be empty");
      return;
    }
    if (userDetails.email.trim() === "") {
      toast("Email cannot be empty");
      return;
    }
    if (userDetails.password.trim() === "") {
      toast("Password cannot be empty");
      return;
    }
    const response = await axios.post("http://localhost:3001/auth/login", {
      first_name: userDetails.first_name,
      last_name: userDetails.last_name,
      email_address: userDetails.email_address,
      password: userDetails.password,
    });
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
              onChange={(e) => handleName(e)}
            />
          </div>

          <div className={styles.email_container}>
            <OutlinedInput
              placeholder="email address"
              size="small"
              style={{ width: 300 }}
              onChange={(e) => handleEmail(e)}
            />
          </div>

          <div className={styles.password_container}>
            <OutlinedInput
              placeholder="password"
              type="password"
              size="small"
              style={{ width: 300 }}
              onChange={(e) => handlePassword(e)}
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
      <Toaster />
    </div>
  );
}
