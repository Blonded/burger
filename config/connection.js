// Set up code to connect node to mysql
// export connection
var mysql = require("mysql");

//var connection;

// var JAWSDB_URL = "mysql://ri1k7wf171zwoinz:lzh6ydyonoh8wdvw@j1r4n2ztuwm0bhh5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/fw4fks9mdq7s6qhi"

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "burgerz_db"
});
//
// // make the connection
connection.connect(function(err) {
  if(err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

////// pasted from JAWSDB_URL
//
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// connection = mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: "root",
//         password: "password",
//         database: "burgerz_db"
//       });
// }

//////

// export conection for our ORM to use
module.exports = connection;
