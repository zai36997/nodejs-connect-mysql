var mysql        = require('mysql');
var connection   = mysql.createConnection({
  supportBigNumbers: true,
  bigNumberStrings: true,
  host     : "localhost",
  user     : "root",
  password : "z@i2539",
  database: "testdb"
});

connection.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      //create DB if not exists
      connection.query("CREATE DATABASE IF NOT EXISTS testdb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
        });
    });
    
module.exports = connection;
