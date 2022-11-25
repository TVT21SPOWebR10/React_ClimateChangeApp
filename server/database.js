const mysql = require('mysql');

const db = mysql.createConnection({
    
    host: 'localhost',
    user: 'root',
    password: '',
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