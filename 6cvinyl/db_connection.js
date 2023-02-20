var mysql = require('mysql');

var connection = mysql.createConnection({
  //host: "db",
  host: "127.0.0.1",
  //port: "8012",
  user: "dbadmin",
  password: "se350",
  database: "tester"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Database is Connected!");
});
module.exports = connection;