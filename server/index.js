
const bodyParser = require('body-parser');
const express = require('express');
const connection = require("./database")
const cors = require("cors");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const port = process.env.PORT || 3001;

const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

//




//


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


//register route missä lähetetään käyttäjänimi ja salasana tietokantaan ja salataan salasana
app.post("/api/register", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            console.log(err)
        }
        const sqlInsert = "INSERT INTO users (username, password) VALUES (?,?);"
        connection.query(sqlInsert, [username, hash],
            (err, result) => {
                console.log(result);
            })
    })
});

//luodaan token
const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]

    if (!token) {
        res.send("need a token")
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "failed to authenticate" });
            } else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}

app.get('/isUserAuth', verifyJWT, (req, res) => {
    res.send("account is authenticated")
})

//login route missä verrataan käyttäjänimeä ja salasanaa tietokannasta
app.post("/api/login", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    connection.query(
        "SELECT * FROM users WHERE username = ?;",
        username,
        (err, result) => {

            if (err) {
                res.send({ err: err })
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {

                        const id = result[0].id
                        const token = jwt.sign({ id }, "jwtSecret", {
                            expiresIn: 3000,
                        })

                        res.json({ auth: true, token: token, result: result });
                    } else {
                        res.json({ auth: false, message: "wrong username or password" });
                    }
                })
            } else {
                res.json({ auth: false, message: "no user exists" });
            }

        }
    );
});

//tietokannan taulujen haku charteille
app.get("/:tablename", (req, res) => {

    const chartData = {
        getTable: function (tableName, callback) {
            console.log(tableName)
            return connection.query('SELECT * FROM ??', [tableName], callback)
        }
    };

    if (req.params.tablename) {
        console.log(req.params.tablename)
        chartData.getTable(req.params.tablename, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        })
    }
})

//poisten käyttäjän tietokannasta route
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id
    const sqlDelete = "DELETE  FROM users WHERE id = ?"
    connection.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})








