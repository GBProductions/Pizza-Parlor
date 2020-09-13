//Business Logic-----------
function pizzaPrice(numberSize, numberMeat, numberVeggie) {
  totalPrice = (numberSize + numberMeat + numberVeggie)
}

function Pizza (size, meat, veggie, totalPrice) {
  this.size = size;
  this.meat = meat;
  this.veggie = veggie;
  this.totalPrice = totalPrice;
};



Pizza.prototype.returnPrice= function() {
  return "You ordered a " + this.size + " pizza with " + this.meat + " and " + this.veggie + ". "
};

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


    let stra = ($("#pizzaSize").val());
    let strb= ($("#pizzaTopping1").val());
    let strc = ($("#pizzaTopping2").val());

    let numberSize = parseInt(stra.slice(-1)),
        inputtedSize = (stra.slice(0, -1)),
        numberMeat = parseInt(strb.slice(-1)),
        inputtedMeat = (strb.slice(0, -1)),
        numberVeggie = parseInt(strc.slice(-1)),
        inputtedVeggie = (strc.slice(0, -1));



    pizzaPrice(numberSize, numberMeat, numberVeggie);
    newPizza = new Pizza (inputtedSize, inputtedMeat, inputtedVeggie, totalPrice);
    addValues(newPizza.totalPrice);
    final = newPizza.returnPrice();
    $("#final").html(final);
  })
});