const mysql = require('mysql');

const connection = mysql.createPool({
    socketPath: "/cloudsql/climatechangeapp-370911:europe-west1:webproject",
    user: 'root',
    password: '1234',
    database: 'webproject'

});

connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
        console.error('Error retrieving data from the database:', error);
        return;
    }
    console.log('Data retrieved from the database:', results);
});

module.exports = connection;