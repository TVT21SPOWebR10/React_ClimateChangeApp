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
  }
  


app.listen(3001, () => {
    console.log("running server");
})








