let mysql = require('mysql');

let pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'InsideOut',
    multipleStatements: true
});

module.exports.getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};