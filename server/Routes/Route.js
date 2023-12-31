const express = require("express");
const bcrypt = require("bcrypt");
const {User} = require("../Model/User")
const router = express.Router();
const jwt = require('jsonwebtoken');


const {SignupController} = require("../Controller/Signup");
const {LoginController } = require("../Controller/Login");
const {FormController} =require("../Controller/Form")


router.post("/signup", SignupController);

router.post("/login", LoginController);

router.post("/addRoom",FormController);


router.post("/", (req, res) => {
  res.send("hii there");
});


module.exports = router;
