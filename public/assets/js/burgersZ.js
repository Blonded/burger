// this is where the onclick functions will be coded out for the buttons

$(function(){

  // update burger
  $(document).on("click", ".change-order", function(event) {
    var id = $(this).data("id");
    var burger_name = $(this).siblings("p").text();
    console.log(burger_name)
    var newOrder = {
      devoured: true
    };

    if($(this).data("devoured")){
      newOrder.devoured = false
    }

    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newOrder
    }).then(
      function(dbBurger) {
        if(dbBurger){
           // find the button with a data-id of id (id of the element we clicked on above), then find its parent – remove its parent (li) which contains a button and a p tag.
          $("button[data-id='"+id+"']").parent().remove();

          // create a updatedBurger to be added to page
          var updatedBurger = {
            id: id,
            burger_name: burger_name,
            devoured: newOrder.devoured
          }

         // after burger updated send burger to template to be added to page
          burgerTemplate(updatedBurger);

        }else {
          console.log("burger not updated:");
          alert("oops! something went wrong. please refresh and try again!");
        }


      }
    );
  });

  // submit new burger listener
  $("#create-burger").on("click", function(event){
    event.preventDefault();

    var newBurgerChoice = {
      burger_name: $("#newOrder").val().trim(),
      devoured: $("[name=hungry]:checked").val().trim()
    };

    // create new burger – send post request
    $.post("/api/burger", newBurgerChoice, function(newBurger){
      //console.log(newBurger);
      $("#newOrder").val("");

      var newBurger = {
        id:newBurger.id,
        burger_name: newBurgerChoice.burger_name,
        devoured: newBurgerChoice.devoured
      }

      // after burger created send burger to template to be added to page
      burgerTemplate(newBurger);
    })

  });

  // create a burger element to be appended to page so there is not a page reload to show updates
  function burgerTemplate(burger){
    var li = $("<li>");
    var p = $("<p>").text(burger["burger_name"]);
    $(li).append(p);
    var img = $("<img>");
    var button = $("<button>").addClass("change-order").attr("data-id", burger.id).attr("data-devoured", burger.devoured);

    if(burger.devoured === true || burger.devoured === "1"){
      button.text("barf!");
      $(li).append(img, button);
      img.attr("src", "https://cdn.vox-cdn.com/thumbor/rodiIJevTEAOxv5YzLf0ayYk6RU=/0x0:1800x1200/1200x800/filters:focal(756x456:1044x744)/cdn.vox-cdn.com/uploads/chorus_image/image/56103909/impossibleburger.0.jpg");
      $("#already-ate").append(li);
    }else {
      button.text("Time to Eat!");
      img.attr("src", "http://www.pngmart.com/files/5/Hamburger-PNG-Clipart.png");
      $(li).append(img, button);
      $("#to-eat").append(li);
    }
  }

})
