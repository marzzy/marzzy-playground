function fib(num) {
    if(num > 1) {
        return fib(num-1) + fib(num-2)
    } else {
        return num;
    }
}

console.log('0 : ', fib(0))
console.log('1 : ', fib(1))
console.log('1 : ', fib(2))
console.log('2 : ', fib(3))
console.log('3 : ', fib(4))
console.log('5 : ', fib(5))
console.log('8 : ', fib(6))
console.log('13 : ', fib(7))
console.log('6765 : ', fib(20))