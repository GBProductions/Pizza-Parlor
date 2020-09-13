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



Pizza.prototype.returnPrice= function() {
  return this.totalPrice
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

    let str1 = (stra.slice(-1)),
        str2 = (stra.slice(0, -1)),
        str3 = (strb.slice(-1)),
        str4 = (strb.slice(0, -1)),
        str5 = (strc.slice(-1)),
        str6 = (strc.slice(0, -1));

      console.log(str1);
      console.log(str2);
      console.log(str3);
      console.log(str4);
      console.log(str5);
      console.log(str6);


    
    
    
    
    
    


    
    let inputtedSize = parseInt($("#pizzaSize").val());
    let inputtedMeat = parseInt($("#pizzaTopping1").val());
    let inputtedVeggie = parseInt($("#pizzaTopping2").val());

    totalPrice(inputtedSize, inputtedMeat, inputtedVeggie);
    newPizza = new Pizza (inputtedSize, inputtedMeat, inputtedVeggie, totalPrice);

    returnPrice

    addValues(newPizza.totalPrice);
  })
});