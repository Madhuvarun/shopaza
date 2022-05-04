const User = require("../models/userModel");
const createJWT = require("../helpers/jwt.helper");
const bcrypt = require("bcrypt");
const joi = require("joi");

async function login(req, res, next) {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email }).exec();
  if (!user) {
    res
      .status(200)
      .json({ status: "failure", description: "invalid credentials" });
  } else {
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      const currentDate = new Date();
      const timestamp = currentDate.getTime();
      const jwt_token = createJWT(user._id);
      res.cookie("_bmck", jwt_token);
      res.send({ status: "success", description: "Login successfull" });
    } else {
      res
        .status(200)
        .json({ status: "failure", description: "invalid credentials" });
    }
  }
}

async function signup(req, res, next) {
  try {
    const schema = joi.object({
      name: joi.string(),
      password: joi.string(),
      email: joi.string(),
      primary_contact: joi.number(),
      country_code: joi.string(),
    });

    const { name, email, password, primary_contact, country_code } = req.body;
    const result = schema.validate({
      name,
      email,
      password,
      primary_contact,
      country_code,
    });

    if (result.error) {
      res
        .status(200)
        .json({ status: "failure", description: result.error.message });
    } else {
      const response = await User.findOne({ email: email }).exec();
      if (response === null) {
        const dataInserted = await User.create({
          name,
          email,
          password,
          primary_contact,
          country_code,
        });
        const jwt_token = createJWT(dataInserted._id);
        res.cookie("_bmck", jwt_token);
        res
          .status(201)
          .send({ status: "success", description: "Sign up successfull" });
      } else {
        res
          .status(200)
          .json({ status: "failure", description: "email already exists" });
      }
    }
  } catch (error) {
    res.status(200).json({ status: "failure", description: error.message });
  }
}

exports.login = login;
exports.signup = signup;
