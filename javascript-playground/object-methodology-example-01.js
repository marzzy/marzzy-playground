// Run Environment:        Browser
// Name:                   Simple Calculator
// Target & Description:
//      It will get a and b(in prompt) from you
//        and then display the sum and multiple of them (on alert)

let calculator = {
  sum(){
    return this.a + this.b;
  },
  mul(){
    return this.a * this.b;
  },
  read(){
    this.a =+ prompt("a?");
    this.b =+ prompt("b?");
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());