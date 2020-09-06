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
    const size = parseInt($("#pizzaSize").val());
    const meat = parseInt($("#pizzaTopping1").val());
    const veggie = parseInt($("#pizzaTopping2").val());
    console.log(size, meat, veggie)
    
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