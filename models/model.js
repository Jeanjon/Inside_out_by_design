let db = require('../configDB');

module.exports.Connexion = function(data, callback) {
    db.getConnection(function(err, connection) {
        if (!err) {
            let sql = "SELECT * FROM users WHERE email ='" + data.email +"'";
            sql += " AND pwd ='" + data.pwd+"'";
            console.log(sql);
            connection.query(sql, callback);

            connection.release();
        }
    })
}

module.exports.CreateAccount = function(data, callback) {
    db.getConnection(function(err, connection) {
        if (!err) {
            let sql = "INSERT INTO users VALUES ('"+ data.email+"','"+data.pwd+"','"+data.name+"','"+data.surname+"')";
            console.log(sql);
            connection.query(sql, callback);

            connection.release();
        }
    })
}