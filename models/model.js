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

module.exports.getTopic = function (callback) {
    db.getConnection(function(err, connection) {
        if (!err) {
            let sql = "Select topic, creator, id, MAX(datepost) from forum f join forum_message fm on f.id = fm.id_topic group by id_topic order by id_topic asc";
            console.log(sql);
            connection.query(sql, callback);

            connection.release();
        }
    })
}

module.exports.getMessage= function (data,callback) {
    db.getConnection(function(err, connection) {
        if (!err) {
            let sql = "Select * from forum_message where id_topic = "+ data+ " order by datepost asc";
            console.log(sql);
            connection.query(sql, callback);

            connection.release();
        }
    })
}