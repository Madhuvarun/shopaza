const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      //   unique: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    salt: {
      type: String,
    },
    member_since: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

sellerSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.salt = salt;
  const hashed_password = await bcrypt.hash(this.password, this.salt);
  this.password = hashed_password;
  next();
});

sellerSchema.post("save", function (next) {
  console.log("seller created successfully");
});

const Seller = mongoose.model("Seller", sellerSchema);
module.exports = Seller;
