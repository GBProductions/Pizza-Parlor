/*Pricing logic

High Price - $20
Medium Price- $15
Low price- $10

Small-1
Medium-2
Large-3

Pepperoni-1
Ham-2
Bacon-3

Pineapple-1
Mushrooms-2
Olives-3



*/


//Business Logic for Pizza
function Pizza() {
  this.orders = [],
  this.currentId = 0
}

Pizza.prototype

function Pizza(size, meat, veggie) {
  this.size = size,
  this.meat = meat,
  this.veggie = veggie,

  this.pizzaOrder = function() {
    return "A " + this.size + " pizza with " + this.meat + " and " + this.veggie;
  } 
}


//UI Logic


$(document).ready(function() {
  $("form#pizzaSelect").submit(function(event) {
    event.preventDefault();
    const inputtedSize = ($("input:radio[name=pizzaSize]:checked").val());
    const inputtedMeat = ($("input:radio[name=pizzaTopping1]:checked").val());
    const inputtedVeggie = ($("input:radio[name=pizzaTopping2]:checked").val());
    console.log(size, meat, veggie);



    let pizzaOrder = new Pizza(inputtedSize, inputtedMeat, inputtedVeggie);
  });
});
