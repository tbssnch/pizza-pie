$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("select#size").val();
    var toppingInput = $("select#toppings").val();

    console.log();
    $("ul#order-list").text();
    $("ul#order-list").append("<li>Size: " + sizeInput + "</li>" + "<li>Toppings: " + toppingInput + "</li>");
  });
});
