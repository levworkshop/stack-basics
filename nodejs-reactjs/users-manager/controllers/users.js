var getConnection = require('./database');
var mysql = require('mysql2');


exports.readList = function (req, res, next) {
    getConnection(function (err, conn) {
        if (err) {
            throw err;
        }
        console.log('Connected successfully');

        var sql = 'SELECT * FROM `users`';
        conn.query(sql, function (err, users) {
            if (err) {
                throw err;
            }

            res.json({
                "status": "ok",
                data: users
            });

            conn.release();
        });
    });
};


exports.addUser = function (req, res, next) {
    var username = req.body.username;
    var email = req.body.email;
    if (!username || username.length === 0) { // can be made using JOI
        res.json({
            "status": "error",
            "msg": "ERROR: name is empty"
        });
        return;
    }

    getConnection(function (err, conn) {
        if (err) {
            throw err;
        }
        console.log('Connected successfully');

        var sql = "INSERT INTO `users` (username, email) " +
            "VALUES (" + mysql.escape(username) + ","+ mysql.escape(email) +");";
        conn.query(sql, function (err, user) {
            if (err) {
                throw err;
            }

            res.json({
                "status": "ok",
                data: user
            });

            conn.release();
        });
    });
};


exports.deleteUser = function (req, res, next) {
    var userId = req.body.userId;
    if (!userId) { // can be made using JOI
        console.log("ERROR: id is required");

        res.json({
            "status": "error",
            "msg": "ERROR: id is missing"
        });
        return;
    }

    getConnection(function (err, conn) {
        if (err) {
            throw err;
        }
        console.log('Connected successfully');

        var sql = "DELETE FROM `users` WHERE id=" + mysql.escape(userId) + ";";
        conn.query(sql, function (err, result) {
            if (err) {
                throw err;
            }

            res.json({
                "status": "ok",
                data: result
            });

            conn.release();
        });

    });
};

exports.updateUser = function (req, res, next) {
    var userId = req.body.userId;
    var username = req.body.username;
    var email = req.body.email;

    getConnection(function (err, conn) {
        if (err) {
            throw err;
        }
        console.log('Connected successfully');

        var sql = "UPDATE `users` " +
            "SET username=" + mysql.escape(username) +
            ", email=" + mysql.escape(email) +
            " WHERE id=" + mysql.escape(userId) + ";";

        conn.query(sql, function (err, result) {
            if (err) {
                throw err;
            }

            res.json({
                "status": "ok",
                data: result
            });

            conn.release();
        });

    });
};