const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");
const db = require('./database');
require("./database");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/register", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    const sqlInsert = "INSERT INTO users (username, password) VALUES (?,?);"
    db.query(sqlInsert, [username, password], (err, result)=>{
        console.log(result);
    })
});

app.listen(3001, () => {
    console.log("running server");
})








