const mysql = require('mysql');

const db = mysql.createConnection({
    
    user: 'testuser',
    password: '1234', //salasana123 uus
    database: 'webproject',
    
})

if(process.env.NODE_ENV == "production") {
    db.socketPath = process.env.GAE_DB_SOCKET
    console.log("cloud database")
} else {
    db.host ="localhost";
    console.log("localhost")
    
}

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL connected...")
    }
})



module.exports = db;