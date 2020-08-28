//Business Logic for Pizza

function Pizza(size, meat, veggie) {
  this.size = size,
  this.meat = meat,
  this.veggie = veggie,
  this.pizzaOrder = function() {
    return "A " + this.size + " pizza with " + this.meat + " and " + this.veggie;
  } 
}

let 

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
