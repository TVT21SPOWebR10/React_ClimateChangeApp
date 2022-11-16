const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");
const db = require('./database');
require("./database");
var loginRouter = require('./routes/login')

const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/login', loginRouter);


app.use(authenticateToken);


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    console.log("token = " + token);
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.MY_TOKEN, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
});

app.post("/api/login", (req, res)=> {

    const username = req.body.username
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result)=>{

        if(err) {
            res.send({err: err})
        }
            if (result.length > 0) {
                res.send(result);
            }else{
                res.send({message: "Wrong username or password" });
            }
        
        }
    );
});


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






  }
  


app.listen(3001, () => {
    console.log("running server");
})








