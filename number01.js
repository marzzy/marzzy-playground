'use strict';

function readNumber() {
  let enteredValue = prompt('plz enter number: ',0);

  if (Number(enteredValue) == enteredValue || enteredValue === null)
    alert(`Read: ${enteredValue}`)
  else 
    return readNumber()
}

readNumber();