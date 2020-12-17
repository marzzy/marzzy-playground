// Run Environment:        Browser
// Name:                   Simple Calculator
// Target & Description:
//      It will get a and b(in prompt) from you
//        and then display the sum and multiple of them (on alert)

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


function Calculator() {
  this.read = function () {
    this.a =+ prompt('a?');
    this.b =+ prompt('b?');
  };
  
  this.sum = function (){
    return this.a + this.b;
  }

  this.mul = function () {
    return this.a * this.b;
  }
};