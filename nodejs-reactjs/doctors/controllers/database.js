var mysql = require('mysql2');
var config = require('../config/dev');

var pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_Name,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});

var getConnection = function (cb) {
    pool.getConnection(function (err, connection) {
        //if(err) throw err;
        //pass the error to the cb instead of throwing it
        if(err) {
            return cb(err);
        }
        cb(null, connection);
    });
};

module.exports = getConnection;
