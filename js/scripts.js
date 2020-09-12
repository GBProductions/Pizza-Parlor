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

Spec 1: When user does not select an option on all three menu boxes (Size, First Topping, Second Topping) no value is returned.
Input:(Size: Small, First: --Select--, Second: Pineapple)
Output:No price returned

Spec 2: Hitting Reset button will clear drop down menus and clear price output.
Input: (Size: Small, First: Pepperoni, Second: Pineapple) Reset
Output: $10 (Cleared after Reset)

Spec 3: If the Total Value for a pizza order is more than or equal to 7, the returned price will be $20. This Spec takes prescedent over Spec 4 and Spec 5.
Input: (Ex: Size: Large, First: Bacon, Second: Olives)
Output: $20

Spec 4: If the Total Value for a pizza order is more than or equal to 4, the returned price will be $15. This Spec takes prescedent over Spec 5.
Input: (Ex: Size: Medium, First: Pepperoni, Second: Pineapple) 
Output: $15

Spec 5: If the Total Value for a pizza order is more than or equal to 1, the returned price will be $10.
Input: (Ex: Size: Small, First: Pepperoni, Second: Pineapple) 
Output: $10


---------------------TEST---------------------

Test 1: When user does not select an option on one or all three menu boxes (Size, First Topping, Second Topping) no value is returned.
Input:(Size: Small, First: --Select--, Second: Pineapple)
Output:No price returned

Test 2: Hitting Reset button will clear drop down menus and clear price output.
Input: (Size: Small, First: Pepperoni, Second: Pineapple) Reset
Output: $10 (Cleared after Reset)

Test 3: When user selects a Small, Pepperoni, Pineapple pizza, the cost will be $10.
Input: (Size: Small, First: Pepperoni, Second: Pineapple) 
Output: $10

Test 4: When user selects a Medium, Pepperoni, Pineapple pizza, the cost will be $15.
Input: (Size: Medium, First: Pepperoni, Second: Pineapple) 
Output: $15

Test 5: When user selects a Large, Ham, and Mushroom pizza, the cost will be $20.
Input: (Size: Large, First: Ham, Second: Mushrooms) 
Output: $20

Test 6: When user selects a Large, Bacon, and Olives pizza, the cost will be $20.
Input: (Size: Large, First: Bacon, Second: Olives) 
Output: $20

Test 7: When user selects a Small, None, and None pizza, the cost will be $10.
Input: (Size: Small, First: None, Second: None) 
Output: $10

Test 8: When user selects a Medium, None, and None pizza, the cost will be $10.
Input: (Size: Medium, First: None, Second: None) 
Output: $10

Test 9: When user selects a Large, None, and None pizza, the cost will be $10.
Input: (Size: Large, First: None, Second: None) 
Output: $10

Test 10: When user selects a Medium, None, and Olives pizza, the cost will be $15.
Input:  (Size: Medium, First: None, Second: Olives) 
Output: $15
*/
//////////////////////////////////////////////////////////////////////////////////REMOVE EVERYTHING ABOVE

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
  
    let newPizza = testPizza.fullOrder();
    (addValues(newPizza));
  })
});