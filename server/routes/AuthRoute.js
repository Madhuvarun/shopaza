const express = require("express");
const router = express.Router();
const joi = require("joi");

const authController = require("../controllers/authController");

router.post("/login", authController.login);

router.post("/signup", authController.signup);

module.exports = router;
