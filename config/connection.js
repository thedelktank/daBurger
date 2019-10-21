var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'mkpgktohpitxqxdy',
    password: 'bubgv1kdo51yc96f',
    database: 'ig5f30phsi1rdef5'
})

connection.connect(function(err){
    if(err)throw err;
    console.log('connected as id: '+connection.threadid);
});

module.exports = connection;