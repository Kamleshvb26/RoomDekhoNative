const express = require("express");//hi kamlesh
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/login', (req, res) => {
    console.log("Login hit");
    res.sendStatus(200);
})
// listening om port 5000

app.listen(5000, () => {
    console.log('listening on port 5000');
})

