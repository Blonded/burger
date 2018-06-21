// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-appetite").on("click", function(event) {
    var id = $(this).data("id");
    var newAppetite = $(this).data("newappetite");


    var newAppetiteStatus = {
      hungry: newAppetite
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newAppetiteStatus
    }).then(
      function() {
        console.log("changed appetite to: ", newAppetite);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

// triggered when the submit button is clicked
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim(),
      hungry: $("[name=hungry]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        //console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

// delete when the button is clicked
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
