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


Pizza.prototype.fullOrder = function() {
  return ("A " + this.size + " pizza with " + this.meat + " and " + this.veggie);
}
*/




//Business Logic Overal Pizza Order
function Pizza(newPizza) {
  this.newPizza = newPizza
}

function find() {
  if (this.newPizza >= 1) {
      pizzaPrice = ("$10") 
    } 
  if (this.newPizza >= 4) {
      pizzaPrice = ("$15")
    } 
  if(this.newPizza >= 7) { 
      return pizzaPrice = ("$20")
    }  
};

//User Interface Logic------------

$(document).ready(function() {
  $("form#pizzaSelect").submit(function(event) {
    event.preventDefault();

    
    let inputtedSize = parseInt($("#pizzaSize").val());
    let inputtedMeat = parseInt($("#pizzaTopping1").val());
    let inputtedVeggie = parseInt($("#pizzaTopping2").val());
    
    debugger
    let newPizza = new Pizza(inputtedSize + inputtedMeat + inputtedVeggie);
    
    (find(Pizza(newPizza)));

    console.log(pizza);

  });
});
