// import mySQL connection.
var connection = require("../config/connection.js");
// create the methods that will execute the necessary mysql commands in the
// controllers. These are the methods you will need in order to retrieve and store
// data in your DATABASE

// Export the ORM object in module exports.

// the following function loops through and creates an array of question marks
// and turns it into a string. this is needed in order to write the query (to pass three values).
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// These will be your ORM's -- homemade.
// selectAll()
// insertOne()
// updateOne()


// !!! could possibly use function to
// !!! convert object key/value pairs to sql syntax !!!

var orm = {
  // to selectALL
  all: function(tableInput, cb) {
    var queryString = "SELECT FROM" + tableInput + ";";
    connection.query(queryString, function(err,result) {
      if(err) {
        throw err;
      }
      cb(result);
    });
  },
  // to CREATE - or Insert.
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO" + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if(err) {
        throw err;
      }
      cb(result);
    });
  },
  // to UPDATE:
  update: function(table, objColVals, conditions, cb){
    var queryString = "UPDATE" + table;

    queryString += " SET ";
   queryString += objToSql(objColVals);
   queryString += " WHERE ";
   queryString += condition;

   console.log(queryString);
   connection.query(queryString, function(err, result) {
     if (err) {
       throw err;
     }
     cb(result);
  });
}

};
// ^ closes obj orm.




// export the orm object for the folder:[model] - burger.js
module.exports = orm;
