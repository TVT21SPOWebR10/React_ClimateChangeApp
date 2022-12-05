const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");
const db = require('./database');
require("./database");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/register", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash)=>{

        if (err){
            console.log(err)
        }
        const sqlInsert = "INSERT INTO users (username, password) VALUES (?,?);"
        db.query(sqlInsert, [username, hash], 
            (err, result)=>{
            console.log(result);
        })
    })
});

const verifyJWT = (req, res, next)=>{
    const token = req.headers["x-access-token"]

    if(!token){
        res.send("need a token")
    }else{
        jwt.verify(token, "jwtSecret", (err, decoded)=>{
            if(err){
                res.json({auth: false, message: "failed to authenticate"});
            }else{
                req.userId = decoded.id;
                next();
            }
        })
    }
}

app.get('/isUserAuth', verifyJWT,(req, res)=>{
    res.send("account is authenticated")
})

app.post("/api/login", (req, res)=> {

    const username = req.body.username
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE username = ?;",
        username,
        (err, result)=>{

        if(err) {
            res.send({err: err})
        }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response)=>{
                    if(response){

                        const id = result[0].id
                        const token = jwt.sign({id}, "jwtSecret", {
                            expiresIn: 3000,
                        })

                        res.json({auth: true, token: token, result: result});
                    }else{
                        res.json({auth: false, message: "wrong username or password"});
                    }
                })
            }else{
                res.json({auth: false, message: "no user exists"});
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


app.delete("/delete/:id", (req, res)=>{
    const id = req.params.id
    const sqlDelete = "DELETE  FROM users WHERE id = ?"
    db.query(sqlDelete, id, (err, result)=>{
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    }) 
})






app.listen(3001, () => {
    console.log("running server");
})








