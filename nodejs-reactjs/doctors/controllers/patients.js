var getConnection = require('./database');
var mysql = require('mysql2');

// read list of all patients from db and send response to client
exports.getPatients = function (req, res, next) {
    getConnection(function(err, conn){
        if (err) {
            throw err;
        }

        var sql = 'SELECT * FROM `patients`';
        conn.query(sql, function (err, data) {
            if (err) {
                throw err;
            }
            res.json({
                "status": "ok",
                "data": data
            })
        })
    })
};

exports.getRecentPatients = function (req, res, next) {
    getConnection(function(err, conn){
        if (err) {
            throw err;
        }

        var sql = 'SELECT * FROM `patients` ' +
            'WHERE createdAt<=NOW() ORDER BY createdAt ASC LIMIT 3';
        conn.query(sql, function (err, data) {
            if (err) {
                throw err;
            }
            res.json({
                "status": "ok",
                "data": data
            })
        })
    })
};

exports.getTodaysPatients = function (req, res, next) {
    getConnection(function(err, conn){
        if (err) {
            throw err;
        }

        var sql = 'SELECT COUNT(*) as todaysPatients FROM `patients` ' +
            'WHERE createdAt>=date(NOW())';
        conn.query(sql, function (err, data) {
            if (err) {
                throw err;
            }

            res.json({
                "status": "ok",
                "data": data[0].todaysPatients
            })
        })
    })
};


exports.getTodaysAppointments = function (req, res, next) {
    getConnection(function(err, conn){
        if (err) {
            throw err;
        }

        var sql = 'SELECT COUNT(*) as todaysAppointments  FROM `appointments` ' +
            'WHERE scheduleDate>=date(NOW())';
        conn.query(sql, function (err, data) {
            if (err) {
                throw err;
            }
            res.json({
                "status": "ok",
                "data": data[0].todaysAppointments
            })
        })
    })
};


// add new patient record in db
exports.addPatient = function(req, res, next) {
    var body = req.body;

    getConnection(function(err, conn){
        if (err) {
            throw err;
        }
        var sql = 'INSERT INTO `patients` ' +
            '(first, last, phone, email, gender, createdAt) ' +
            'VALUES(' +
            mysql.escape(body.first) + ',' +
            mysql.escape(body.last) + ',' +
            mysql.escape(body.phone) + ',' +
            mysql.escape(body.email) + ',' +
            mysql.escape(body.gender) + ', NOW())';

        conn.query(sql, function (err, data) {
            if (err) {
                throw err;
            }
            res.json({
                "status": "ok",
                "data": data
            })
        })
    })
};