// require express
var express = require("express");
//create router for express
var router = express.Router();

//import the model burger.js file to use its database functions
var burger = require("../models/burger.js");

router.get("/", function(req,res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    conosole.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("api/burger", function (req,res) {
  burger.create([
    "name", "HUNGRY?"
  ], [
    req.body.name, req.body.hungry
  ], function (result){
    // to send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});







// create the router for the app and export the router at the end of your files




// Export routes for server.js to use.
module.exports = router;
