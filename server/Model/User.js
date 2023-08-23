const mongoose = require('mongoose');


// User Schema
const userSchema = new mongoose.Schema({
  email:String,
  name:String,
  password:String
});

const User = mongoose.model('User', userSchema);

// Note Schema


module.exports = { User };