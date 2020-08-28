//Business Logic


function Pizza(size, meat, veggie) {
  this.size = size,
  this.meat = meat,
  this.veggie = veggie,
  this.pizzaOrder = function() {
    return "A " + this.size + " pizza with" + this.meat + " and " + this.veggie;
  } 
}

var pizza1 = new Pizza("medium", "pepperoni", "pineapple");

console.log(pizza1);



//UI Logic


$(document).ready(function() {
  $("form#pizzaSelect").submit(function(event) {
    event.preventDefault();
    const size = ($("input:radio[name=pizzaSize]:checked").val());
    const meat = ($("input:radio[name=pizzaTopping1]:checked").val());
    const veggie = ($("input:radio[name=pizzaTopping2]:checked").val());
    console.log(size, meat, veggie);
  });
});
