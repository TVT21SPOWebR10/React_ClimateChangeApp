const mysql = require('mysql');
const express = require('express');
const cors = require("cors")
require("./database");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
    
})

app.listen(3001, () => {
    console.log("running server");
})








