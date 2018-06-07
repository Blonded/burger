// require the following npm packages
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the public directory in app directory
// This is mostly used for CSS and HTML styling files
// for everything included in the folder 'public'.
app.use(express.static("public"));

app.use(bodyParser.urlendcoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs ({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/catsController.js");

app.use("/", routes);

app.listen(PORT, function() {
  // log server side when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
