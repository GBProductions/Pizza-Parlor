/*
---------------------SPECS---------------------

Spec:
Input:
Output:

Spec:
Input:
Output:

Spec:
Input:
Output:

Spec:
Input:
Output:

Spec:
Input:
Output:

Spec:
Input:
Output:

Spec:
Input:
Output:

Spec:
Input:
Output:

Spec:
Input:
Output:

Spec:
Input:
Output:

Spec:
Input:
Output:



---------------------TEST---------------------

Test:
Input:
Output:

Test:
Input:
Output:

Test:
Input:
Output:

Test:
Input:
Output:

Test:
Input:
Output:

Test:
Input:
Output:

Test:
Input:
Output:

Test:
Input:
Output:

Test:
Input:
Output:

Test:
Input:
Output:

Test:
Input:
Output:

Test:
Input:
Output:


*/


//Business Logic-----------
function Pizza (size, meat, veggie) {
  this.size = size;
  this.meat = meat;
  this.veggie = veggie;
};

Pizza.prototype.fullOrder = function() {
  return this.size + this.meat + this.veggie 
};

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
  
    let newPizza = (testPizza.fullOrder());
    (addValues(newPizza));
  })
});