var mysql2 = require('mysql2');

var con = mysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "w0ndermouse",
  port: "3306"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
