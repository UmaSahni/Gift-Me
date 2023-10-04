const express = require("express");
const { UserModel } = require("../Model/user.model");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
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

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({email})
    console.log(user)
    if(user) {
        bcrypt.compare(password, user.password, function(err, result) {
              if(result) {
                const token = jwt.sign({ foo: 'bar' }, "masai");
                console.log(token)
                res.send({"Data":"Login success", token})
            }
            else{
              res.send("Password is wrong")
            }
        });
    }
    else{
        res.send({"data":"Please register yourself first"})
    }
  } catch (error) {

  }
});

module.exports = { userRouter };
