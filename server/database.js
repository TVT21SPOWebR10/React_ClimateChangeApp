const mysql = require('mysql');

const db = mysql.createConnection({
    
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234', //salasana123 uus
    database: 'webproject' 

})

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("MYSQL connected...")
    }
})

module.exports = db;