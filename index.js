const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const CreateRoutes = require("./routes/create.js");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use("/create", CreateRoutes);

app.get("/", (req, res) => {
    res.send("hello");
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
    app.listen(8000, (req, res) => {
        console.log("connected on port 8000");
    });
}).catch(error => {
    console.log("error: ", error);
});