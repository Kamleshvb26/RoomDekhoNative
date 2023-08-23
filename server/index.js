const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const cors = require("cors");
const bcrypt = require('bcrypt');
const authRoutes = require("./Routes/Route");

const app = express();

mongoose.connect('mongodb://127.0.0.1/roomdekhoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

// Middleware

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// 


// Routes
app.use('/', authRoutes);


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
