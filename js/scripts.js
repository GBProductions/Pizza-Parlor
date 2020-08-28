//Business Pizza Order Logic
  function OverallPizzaOrder() {
    this.pizza = []
  }

  OverallPizzaOrder.prototype.addPizza = function() {
    pizza.id = this.assignId();
    this.pizzas.push(pizza);
  }

  OverallPizzaOrder.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  }

  OverallPizzaOrder.prototype.findPrice = function(id) {
    if (this.size === "Small")
      return $10
    if (this.size === "Medium")
      return $15
    if (this.size === "Large")
      return $20
  }

//Business Logic for Pizza
this.pizza = Pizza 
function Pizza(size, meat, veggie) {
  this.size = size,
  this.meat = meat,
  this.veggie = veggie
}

Pizza.prototype.fullOrder = function() {
  return "A " + this.size + " pizza with " + this.meat + " and " + this.veggie;
}



//UI Logic


function displayPizza(pizzaId) {
  const contact = OverallPizzaOrder.findPrice(pizza.id);
  $("#show-price").show();
  $(".final-price").html(newPizza)
}


$(document).ready(function() {
  $("form#pizzaSelect").submit(function(event) {
    event.preventDefault();
    const size = ($("input:radio[name=pizzaSize]:checked").val());
    const meat = ($("input:radio[name=pizzaTopping1]:checked").val());
    const veggie = ($("input:radio[name=pizzaTopping2]:checked").val());
    console.log(size, meat, veggie);


    let newPizza = new Pizza(size, meat, veggie);

    //OverallPizzaOrder.addPizza(newPizza)
  });
})
