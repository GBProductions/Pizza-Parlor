//Business Logic Overal Pizza Order
  function OverallPizzaOrder() {
    this.pizzas = [];
  //  this.currentId = 0;
  }

  //OverallPizzaOrder.prototype.addPizza = function(pizza) {
   // pizza.id = this.assignId();
   // this.pizzas.push(pizza);
  //}
/*
  OverallPizzaOrder.prototype.assignId = function() {
    this.currentId +=1;
    return this.currentId;
  }

  OverallPizzaOrder.prototype.findPizza = function(id) {
    for (let i=0; i< this.pizzas.length; i++) {
        if (this.pizzas[i].id == id) {
          return this.pizzas[i];
        }
      };
    return false
  }*/
  Pizza.prototype.findPrice = function() {
    l
  }

//Business Logic for Pizza
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
    
    //let newPizza = new Pizza(inputtedSize, inputtedMeat, inputtedVeggie);
   // overallPizzaOrder.addPizza(newPizza);
    //console.log(newPizza)
  });
});




/* 
let OverallPizzaOrder = new OverallPizzaOrder();
let pizza = new Pizza("Small", "Ham", "Olives");
OverallPizzaOrder.addPizza(pizza);


  }

  OverallPizzaOrder.prototype.findPrice = function(id) {
    if (this.size === "Small")
      return $10
    if (this.size === "Medium")
      return $15
    if (this.size === "Large")
      return $20
  }




//UI Logic


function displayPizza(pizzaId) {
  const contact = OverallPizzaOrder.findPrice(pizza.id);
  $("#show-price").show();
  $(".final-price").html(newPizza)
}

*/
