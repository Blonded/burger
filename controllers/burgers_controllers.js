// require express
var express = require("express");
//create router for express
var router = express.Router();

//import the model burger.js file to use its database functions
var burger = require("../models/burger.js");


// DO C.R.U.D.
// Create, Read, Update, Delete

router.get("/", function(req,res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


// post is to update
router.post("api/burger", function (req,res) {
  // requiring the burger.js file - to create/update a new burger.
  burger.create([
    // create a new name in the database.
    "name", "hungry"
  ], [
    req.body.name, req.body.hungry
  ], function (result){
    // to send back the ID of the new quote
    //print in json
    res.json({ id: result.insertId });
  });
});

router.put("api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update ({
    hungry: req.body.hungry
  }, condition, function(result) {
    if(result.changedRows === 0) {
      // if no rows changed, then the id must not exist
      // throw 404 error
      return res.status(404).end();
    } else{
      res.status(200).end();
    }
  });
});









// create the router for the app and export the router at the end of your files




// Export routes for server.js to use.
module.exports = router;
