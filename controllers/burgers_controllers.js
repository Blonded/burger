// require express
var express = require("express");
//create router for express
var router = express.Router();

//import the model burger.js file to use its database functions
var burger = require("../models/burger.js");


// DO C.R.U.D.
// Create, Read, Update, Delete

// get all burger
router.get("/", function(req,res) {
  burger.all(function(data) {

    var hbsObject = {
      burgers: data
    };

    // console.log("hbsObject", hbsObject);
    res.render("index", hbsObject);
  });
});

// create new burger
router.post("/api/burger", function (req,res) {
  console.log("body", req.body);
  // requiring the burger.js file - to create/update a new burger.
  burger.create([
    // create a new name in the database.
    "burger_name", "devoured"
  ], [
    req.body["burger_name"], req.body.devoured
  ], function (result){
    console.log("result", result);
    // to send back the ID of the new quote
    //print in json
    res.json({ id: result.insertId });
  });
});


// update existing burger
router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  //console.log("condition", condition);

  burger.update ({
    devoured: req.body.devoured
  }, condition, function(result) {
    console.log("result", result);
    if(result.changedRows === 0) {
      // if no rows changed, then the id must not exist
      // throw 404 error
      //.status(404).end()
      return res.json(false);
    } else {
      res.json(true);
    }
  });
});









// create the router for the app and export the router at the end of your files




// Export routes for server.js to use.
module.exports = router;
