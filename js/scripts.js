function Pizza (pizzaSize, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  this.total = [];
}

Pizza.prototype.pizzaTotal = function() {
  if ((this.pizzaSize === "Small") && (this.pizzaTopping === "None")) {
    this.total = 8;
  }
  else if ((this.pizzaSize === "Medium") && (this.pizzaTopping === "None")) {
    this.total = 12;
  }
  else if ((this.pizzaSize === "Large") && (this.pizzaTopping === "None")) {
    this.total = 16;
  }
  else if ((this.pizzaSize === "Small") && (this.pizzaTopping === "Cheese" || "Pepperoni" || "Sausage")) {
    this.total = 10;
  }
  else if ((this.pizzaSize === "Medium") && (this.pizzaTopping === "Cheese" || "Pepperoni" || "Sausage")) {
    this.total = 14;
  }
  else if ((this.pizzaSize === "Large") && (this.pizzaTopping === "Cheese" || "Pepperoni" || "Sausage")) {
    this.total = 18;
  }
return this.total;
}

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var sizeInput = $("select#size").val();
    var toppingInput = $("select#toppings").val();


    var newPizza = new Pizza(sizeInput, toppingInput);



    $("ul#order-list").text("Size: " + sizeInput + " " + "Toppings: " + toppingInput + " " + "Price: $" + newPizza.pizzaTotal() + ".00");

    // $("ul#order-list").append("<li>Size: " + sizeInput + "</li>" + "<li>Toppings: " + toppingInput + "</li>" + "<li>Price: $" + newPizza.pizzaTotal() + ".00</li>");
  });
});
