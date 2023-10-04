const express = require("express");
const { UserModel } = require("../Model/user.model");
const bcrypt = require("bcrypt");
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    bcrypt.hash(password, 5, async function (err, hash) {
      if (hash) {
        const user = new UserModel({ email, password: hash, name });
        await user.save();
        res.send({ data: "New user registered" });
      } else {
        res.send({ err: "Error Occured while hasing the password " });
      }
      // Store hash in your password DB.
    });
  } catch (error) {
    res.send({ err: "signup m error h" });
  }
});

userRouter.post("/login", (req, res) => {

    
});

module.exports = { userRouter };
