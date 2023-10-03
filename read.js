var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "ALUNO",
  database: "mydb2"
});

con.connect(function(err) {
if (err) throw err;
var sql = "SELECT name,address FROM customers LIMIT 10";
con.query(sql, function (err, result, fields) {
  if (err) throw err; 
  console.log(result);
});
});