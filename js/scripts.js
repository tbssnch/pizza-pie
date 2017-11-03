function Pizza (pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  this.total = [];
}

Pizza.prototype.pizzaTotal = function() {
  if (this.pizzaSize === "Small") {
    this.total = 8;
    return this.total;
  }
  else if (this.pizzaSize === "Medium") {
    this.total = 12;
    return this.total;
  }
}

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("select#size").val();
    var toppingInput = $("select#toppings").val();


    var newPizza = new Pizza(sizeInput, toppingInput);

    console.log();
    $("ul#order-list").text();
    $("ul#order-list").append("<li>Size: " + sizeInput + "</li>" + "<li>Toppings: " + toppingInput + "</li>" + "<li>Price: $" + newPizza.pizzaTotal() + ".00</li>");
  });
});
