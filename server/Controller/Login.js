const express = require("express");
const bcrypt = require("bcrypt");
const {User} = require("../Model/User")
const router = express.Router();
const jwt = require('jsonwebtoken');


const LoginController = async (req, res) => {
    console.log(req.body);
    try {
      const { email, password } = req.body;
      // Check if user with the given email exists
      const user = await User.findOne({ email });
      if (!user) {
        res.send("401");
        return;
      }
  
      // Compare password
  
      bcrypt.compare(password, user.password, function(err, isPasswordMatch) {
        // result == true
        if (!isPasswordMatch) {
          res.send("401");
          return;
        }
        // res.send({userId : user._id});
  
      // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', {expiresIn: '60m'});
        res.send({ "token":token});
      });
          
    } catch (error) {
      res.send("500");
      
    }
  };

module.exports={LoginController};