const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: [32, "name cannot exceed 64 characters"],
    },
    email: {
      type: String,
      maxLength: [128, "email cannot exceed 256 characters"],
      unique: true,
    },
    password: {
      type: String,
    },
    primary_contact: {
      type: Number,
    },
    salt: {
      type: String,
    },
    addresses: {
      type: Array,
    },
    member_since: {
      type: Date,
      default: Date.now,
    },
    country_code: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.salt = salt;
  const hashed_password = await bcrypt.hash(this.password, this.salt);
  this.password = hashed_password;
  console.log(this);
  next();
});

userSchema.post("save", function (next) {
  console.log("user created successfully");
});

const User = mongoose.model("User", userSchema);
module.exports = User;
