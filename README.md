# Burger

Welcome to the burger app! Here you can add an order, decided whether or not you're hungry [right now] or you'd like to save it for later.
The burger will then append on either side of the page, depending on your hunger levels with an option to move it from one side to the other.

Enjoy!

## Built with
* HTML
* CSS
* Javascript
* Jquery
* MySQL
* Node.js
* Express.js
* {{ Handlebars }}
* Homemade ORM

* Files using MVC [Model, View, Controller] Design Pattern - necessary for functionality.
* Launched with Heroku.


[Launch the Burger App Here!](https://quiet-dusk-52084.herokuapp.com/)

![Preview](http://i64.tinypic.com/2yp0t8m.png "Preview")

## Sample of Code:

Created a burger element to be appended to page so the page doesn't have to reload to update. [In JS]

```

function burgerTemplate(burger){
  var li = $("<li>");
  var p = $("<p>").text(burger["burger_name"]);
  $(li).append(p);
  var img = $("<img>");
  var button = $("<button>").addClass("change-order").attr("data-id", burger.id).attr("data-devoured", burger.devoured);

  if(burger.devoured === true || burger.devoured === "1"){
    button.text("Regurgitate!");
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

```


## Authors
* **Lena Martinson** [Github](https://github.com/Blonded)

## Acknowledgements:
* **Amber Burroughs** [Github](https://github.com/AmberLBurroughs) - Thank you for helping me make it functional!
