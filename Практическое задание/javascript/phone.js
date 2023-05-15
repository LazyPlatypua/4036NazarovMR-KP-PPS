function increasePhoneNumber() {
    var phoneNumberInput = document.getElementById("phone");
    var currentNumber = phoneNumberInput.value;
    
    if (!isNaN(currentNumber)) {
      var newNumber = parseInt(currentNumber) + 1;
      phoneNumberInput.value = newNumber;
    } else {
        var newNumber = 1;
        phoneNumberInput.value = newNumber;
    }
  }