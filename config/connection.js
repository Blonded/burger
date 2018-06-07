// Set up code to connect node to mysql
// export connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "burgers_db"
});

// make the connection
connection.connect(function(err) {
  if(err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});



// export conection for our ORM to use
module.exports = connection;
