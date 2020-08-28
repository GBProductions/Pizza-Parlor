//Business Logic for Pizza
function Pizza() {
  this.orders = [],
  this.currentId = 0
}
function Pizza(size, meat, veggie) {
  this.size = size,
  this.meat = meat,
  this.veggie = veggie
}

Pizza.prototype.findPrice = function() {
  let value = (this.size, this.meat, this.veggie)
  if (this.size === "Small")
    return $10
  if (value === "Medium")
    return $15
  if (this.size === "Large")
    return $20
}

  this.pizzaOrder = function() {
    return "A " + this.size + " pizza with " + this.meat + " and " + this.veggie;
  } 


//UI Logic


$(document).ready(function() {
  $("form#pizzaSelect").submit(function(event) {
    event.preventDefault();
    const size = ($("input:radio[name=pizzaSize]:checked").val());
    const meat = ($("input:radio[name=pizzaTopping1]:checked").val());
    const veggie = ($("input:radio[name=pizzaTopping2]:checked").val());
    console.log(size, meat, veggie);


    let pizzaOrder = new Pizza(size, meat, veggie);
  });
})
