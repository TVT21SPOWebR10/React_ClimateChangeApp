const mysql = require('mysql');
const app = express()
const express = require('express')
const cors = require ('cors')

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7552793',
    password: '9xVjrAbSbv',
    database: 'sql7552793'
});

connection.connect(function(error){
    if(!!error){
        console.log(error);
    } else{
        console.log('connected...!');

    }
});


module.exports = db;