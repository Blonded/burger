// import the orm.js on to burger.js
//PULLS DATA from Orm.js
// this file cannot work without orm.js, as they link together
var orm = require("../config/orm.js")
//create the code that will call the orm functions using burger specific input for the orm

// this will be calling the ORM functions
var burger = {
  all: function (cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // the var cols and vals are arrays
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
}
};



// export at the end of burger.js
module.exports = burger;
