/*Pricing logic

High Price - $20 =>7
Medium Price- $15 =>4
Low price- $10 =>1

Small-1
Medium-2
Large-4

None - 0
Pepperoni-1
Ham-2
Bacon-3

None - 0
Pineapple-1
Mushrooms-2
Olives-3

*/


//Business Logic Overal Pizza Order
  function OverallPizzaOrder() {
    this.pizzas = [];
  }

function Pizza(size, meat, veggie) {
  this.size = size;
  this.meat = meat;
  this.veggie = veggie;
}

Pizza.prototype.fullOrder = function() {
  return ("A " + this.size + " pizza with " + this.meat + " and " + this.veggie);
}


//User Interface Logic------------
let overallPizzaOrder =  new OverallPizzaOrder();

$(document).ready(function() {
  $("form#pizzaSelect").submit(function(event) {
    event.preventDefault();


    let inputtedSize = parseInt($("#pizzaSize").val());
    let inputtedMeat = parseInt($("#pizzaTopping1").val());
    let inputtedVeggie = parseInt($("#pizzaTopping2").val());
    console.log(inputtedSize + inputtedMeat + inputtedVeggie)
    
    let newPizza = new Pizza(inputtedSize, inputtedMeat, inputtedVeggie);
    overallPizzaOrder.addPizza(newPizza);

})





let pizza = new Pizza("Small", "Ham", "Olives"); 
OverallPizzaOrder.addPizza(pizza);



  OverallPizzaOrder.prototype.findPrice = function(id) {
    if (this.size === "Small")
      return $10
    if (this.size === "Medium")
      return $15
    if (this.size === "Large")
      return $20
  }
});


