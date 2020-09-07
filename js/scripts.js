


//Business Logic-----------
function Pizza (size, meat, veggie) {
  this.size = size;
  this.meat = meat;
  this.veggie = veggie;
};

Pizza.prototype.fullOrder = function() {
  return "Your pizza is ready!"; 
};

function addPizza(inputtedSize, inputtedMeat, inputtedVeggie) {
  return (inputtedSize + inputtedMeat + inputtedVeggie)
}

function addValues(newPizza) {
    if (newPizza >= 7) {
      $('#twenty-dollars').show()
    } else if (newPizza >= 4) {
      $('#fifteen-dollars').show()
    } else if (newPizza >= 1) {
      $('#ten-dollars').show()
    }
  };


//User Interface Logic------------

$(document).ready(function() {
  $("form#pizzaSelect").submit(function(event) {
    event.preventDefault();

    
    let inputtedSize = parseInt($("#pizzaSize").val());
    let inputtedMeat = parseInt($("#pizzaTopping1").val());
    let inputtedVeggie = parseInt($("#pizzaTopping2").val());

    let testPizza = new Pizza (inputtedSize, inputtedMeat, inputtedVeggie);
    let newPizza = addPizza(inputtedSize, inputtedMeat, inputtedVeggie); 
    
    (addValues(newPizza));
    
    testPizza.fullOrder();

    
    
    
  })
});