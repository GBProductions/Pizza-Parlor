// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

// Contact.prototype.addAddress = function(addAddress) {
//   this.address.push(addAddress);
// }

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {     // <-- This line is new!
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {     // <-- This line is new!
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// AddressBook.prototype.updateContact = function(id) {
//   contact.id = this.assignId();
//   this.contacts.push(contact);
// }

AddressBook.prototype.updateContact = function(id, first, last, number, email, /*home*/ ) {
  for (let i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        if (first != "") {
          this.contacts[i].firstName = first;
        }
        if (last != "") {
          this.contacts[i].lastName = last;
        }
        if (number != "") {
          this.contacts[i].phoneNumber = number;
        }
        if (email != "") {
          this.contacts[i].email = email;
        }
       /* if (home != "") {
          this.contacts[i].home = home;
        }*/
        if (type != "") {
          this.contacts[i].type = type;
        }
        if (address != "") {
          this.contacts[i].address = address;
        }
      }
    }
  }
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, email, type, address) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber,
  this.email = email,
  // alert(address);
  this.address = { addressType: type, addressName: address}
}

// contact.address.addressType = 
// function Address(addressType, streetAddress) {
//   this.addressType = addressType,
//   this.streetAddress = streetAddress

// }



Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


// User Interface Logic ---------
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};


function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email-address").html(contact.email);
  //$(".home-address").html(contact.home);
  let address = contact.address.addressType + ": " + contact.address.addressName;
  $(".address-ultimate").html(address);

  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id); 
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};

$(document).ready(function() {
  attachContactListeners(); 
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    const inputtedEmailAddress= $("input#new-email-address").val();
    //const inputtedHomeAddress= $("input#new-home-address").val();
    const inputtedAddressType= $("input#new-address-type").val();
    const inputtedAddressUltimate= $("input#new-address").val();

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-email-address").val("");
    //$("input#new-home-address").val(""); 
    $("input#new-address-type").val("");
    $("input#new-address").val("");

    // alert("in");
    //let newAddress = new Address(inputtedAddressType, inputtedAddressUltimate);
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress, inputtedAddressType, inputtedAddressUltimate);

   
    addressBook.addContact(newContact);
    // console.log(addressBook.contacts);
    // newContact.addAddress(newAddress);
    // console.log(newContact.address);
    displayContactDetails(addressBook); 
  });
});