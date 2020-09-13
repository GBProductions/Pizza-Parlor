//Business Logic-----------
function totalPrice(inputtedSize, inputtedMeat, inputtedVeggie) {
  totalPrice = (inputtedSize + inputtedMeat + inputtedVeggie)
}

function Pizza (size, meat, veggie, totalPrice) {
  this.size = size;
  this.meat = meat;
  this.veggie = veggie;
  this.totalPrice = totalPrice;
};



//Pizza.prototype.totalPrice1 = function() {
  //totalPrice = (inputtedSize + inputtedMeat + inputtedVeggie)
//};

//User Interface Logic------------


function addValues(newPizza) {
  if (newPizza >= 7) {
    $('#twenty-dollars').show()
  } else if (newPizza >= 4) {
    $('#fifteen-dollars').show()
  } else if (newPizza >= 1) {
    $('#ten-dollars').show()
  }
};


$(document).ready(function() {
  $("form#pizzaSelect").submit(function(event) {
    event.preventDefault();

    
    let inputtedSize = parseInt($("#pizzaSize").val());
    let inputtedMeat = parseInt($("#pizzaTopping1").val());
    let inputtedVeggie = parseInt($("#pizzaTopping2").val());
debugger
    totalPrice(inputtedSize, inputtedMeat, inputtedVeggie);
    let newPizza = new Pizza (inputtedSize, inputtedMeat, inputtedVeggie, totalPrice);

    addValues(newPizza.totalPrice);
  })
});