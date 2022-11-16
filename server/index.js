const authRoutes = require ("./routes/auth")
const userRoutes = require ("./routes/users")
const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");
const db = require('./database');
require("./database");


const app = express();

app.use(express.json());
app.use("api/auth", authRoutes)
app.use("api/users", userRoutes)

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))



app.get("/:tablename", (req, res)=>{

    const chartData = {
        getTable: function (tableName, callback){
            console.log(tableName)
            return db.query('SELECT * FROM ??', [tableName], callback)
        }
    };

    if (req.params.tablename){
        console.log(req.params.tablename)
        chartData.getTable(req.params.tablename, (err, result)=>{
            if(err){
                res.send(err)
            }else {
                res.send(result)
            }
        })
    }
})





app.listen(3001, () => {
    console.log("running server");
})








