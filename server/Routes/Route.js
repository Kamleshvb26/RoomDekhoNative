const express = require("express");
const bcrypt = require("bcrypt");
const {User} = require("../Model/User")
const router = express.Router();
const jwt = require('jsonwebtoken');


const {SignupController} = require("../Controller/Signup");
const {LoginController } = require("../Controller/Login");


router.post("/signup", SignupController);

router.post("/login", LoginController);

// router.post("/test", (req,res)=>{
//   console.log(req.body);
//   res.send("200");

// });


router.post("/", (req, res) => {
  res.send("hii there");
});


module.exports = router;
