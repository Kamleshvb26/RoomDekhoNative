const express = require("express");
const bcrypt = require("bcrypt");
const {User} = require("../Model/User")
const router = express.Router();
const jwt = require('jsonwebtoken');


const SignupController =  async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log(req.body);  
      // Check if user with the given email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.send("400");
        return;
      }
      // Hash the password
      bcrypt.hash(password, 10, async (err, hash) => {
        // Store hash in your password DB.
        if (err) {
          res.send("500")
          return;
        }
        const newUser = new User({
          name,
          email,
          password: hash,
        });
        await newUser.save();
        res.send("201")
      });
    } catch (error) {
      res.send("500");
    }
  };

module.exports = {SignupController};