// this is where the onclick functions will be coded out for the buttons

$(function(){
  $(".change-burger".on("click", function(event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("newburger");

    var newBigBurger = {
      burger: newBurger
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBigBurger
    }).then(
      function() {
        console.log("changed burger to ", newBurger);
        location.reload();
      }
    );
  });



// send put request
$.ajax(".create-form").on("submit", function(event){
  event.preventDefault();

  var newBurger = {
    name: $("#burg").val().trim(),
    hungry: $("[name=hungry]:checked").val()trim()
  };

// send post request
$.ajax("/api/burgers", {
  type: "POST",
  data: newBurger
}).then(
  function(){
    console.log("Created new burger");
    //reload page to get the updated list
    location.reload();
  }
);
