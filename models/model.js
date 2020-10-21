let db = require('../configDB');

module.exports.exemple = function(callback) {
    db.getConnection(function(err, connection) {
        if (!err) {
            let sql = "";

            connection.query(sql, callback);

            connection.release();
        }
    })
}