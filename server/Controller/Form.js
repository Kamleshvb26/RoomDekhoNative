const express = require("express");
const bcrypt = require("bcrypt");
const {Room} = require("../Model/RoomData")
const router = express.Router();
const jwt = require('jsonwebtoken');


const FormController =  async (req, res) => {
    try {

      const { houseName, contactDetails, ownerName,description,address,imageUrls } = req.body;
      console.log(req.body);  
      try{
          const newRoom = new Room({
                houseName, contactDetails, ownerName,description,address,imageUrls
            });
            await newRoom.save();
            res.send("201")

      }
      catch(err){
        console.log("problem");
        res.send("500")
      }
      
    } catch (error) {
      res.send("500");
    }
  };

module.exports = {FormController};