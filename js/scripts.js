/*
---------------------Information---------------------

Price is determined by assigning values to the following options:

Pizza Size Values (choose one)
  Small - "1"
  Medium - "2"
  Large - "3"

First Topping Values (choose one)
  Pepperoni - "1"
  Ham - "2"
  Bacon - "3"
  None - "0"

Second Topping Values (choose one)
  Pineapple - "1"
  Mushrooms - "2"
  Olives - "3"
  None - "0"

These values are then added up for a Total Value.

Ex: (Size Value + First Topping Value + Second Topping Value) = Total Value

The price is determined by figuring out where the total is inputted:

1. If Total Value => 7
    return price of $20
  
2. If Total Value => 4
    return price of $15

3. If Total Value => 1
  return price of $10


The Final Price is presented to the user.

---------------------SPECS---------------------

Spec: When user does not select an option on all three menu boxes (Size, First Topping, Second Topping) no value is returned.
Input:(Size: Small, First: --Select--, Second: Pineapple)
Output:No price returned

Spec: Hitting Reset button will clear drop down menus and clear price output.
Input: (Size: Small, First: Pepperoni, Second: Pineapple) Reset
Output: $10 (Cleared after Reset)

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

Test: When user does not select an option on one or all three menu boxes (Size, First Topping, Second Topping) no value is returned.
Input:(Size: Small, First: --Select--, Second: Pineapple)
Output:No price returned

Test: Hitting Reset button will clear drop down menus and clear price output.
Input: (Size: Small, First: Pepperoni, Second: Pineapple) Reset
Output: $10 (Cleared after Reset)


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