// run in browser
function add(n){
    let total = 0;
    for(let i=1; i<=n; i++){
        total += i;
    }
    return total;
}

let t1 = performance.now();
add(1000000000);
let t2 = performance.now();
console.log('time elapsed: ', t2-t1)