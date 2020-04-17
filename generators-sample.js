function *foo(){
  x++;
  yield x;
  bar();
  return x;
}

let x = 1;
let fooVar = foo();

function bar() {
  x++;
}

console.log('x initial(1):', x);
let res = fooVar.next();
console.log('x run foo(2)', x);
console.log('res', res);
x++;
console.log('increase x(3)', x);
fooVar.next();
console.log('continue foo(4)', x);
