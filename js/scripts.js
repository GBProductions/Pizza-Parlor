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
function Pizza(newPizza) {
  this.newPizza = newPizza
}

function find() {
  if (this.newPizza >= 1) {
      return newPizza = ("$10") 
    } else if (this.newPizza >= 4) {
      return newPizza = ("$15")
    } else if (this.newPizza >= 7) { 
      return newPizza = ("$20")
    }  
  };
/*
  function OverallPizzaOrder() {
    this.pizzas = [];
  }



Pizza.prototype.fullOrder = function() {
  return ("A " + this.size + " pizza with " + this.meat + " and " + this.veggie);
}

*/
//User Interface Logic------------
//let overallPizzaOrder =  new OverallPizzaOrder();

$(document).ready(function() {
  $("form#pizzaSelect").submit(function(event) {
    event.preventDefault();

    
    let inputtedSize = parseInt($("#pizzaSize").val());
    let inputtedMeat = parseInt($("#pizzaTopping1").val());
    let inputtedVeggie = parseInt($("#pizzaTopping2").val());
    
    debugger
    let newPizza = new Pizza(inputtedSize + inputtedMeat + inputtedVeggie);
    
    (find(Pizza(newPizza)));

    console.log(newPizza);

  });
});
