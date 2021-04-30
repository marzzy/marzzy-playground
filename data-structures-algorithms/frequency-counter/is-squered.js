// function isSquerd(firstArr, secArr) {
//     //inputs: firstArr: [] , secArr: []
//     //output: boolean

//     // make an squere array from first arr
//     const squeredArr = firstArr.map(item => item*item).sort();

//     // findout if the secArr has the same value as the squered arr
//     return JSON.stringify(squeredArr) === JSON.stringify(secArr.sort());
// }

function isSquerd(firstArr, secArr) {
    //inputs: firstArr: [] , secArr: []
    //output: boolean

    // 1. make 2 frequency object from inputs
    let firstArrFrequency = {};
    let secArrFrequency = {};

    firstArr.forEach(item => {firstArrFrequency[item*item] = ++firstArrFrequency[item*item] || 1});
    secArr.forEach(item => {secArrFrequency[item] = ++secArrFrequency[item] || 1});

    // 2. check if they are the same (return true) or not(return false)
    for(item of Object.entries(firstArrFrequency)) {
        const [number, frequency] = item;

        // 2.a. if number was exist on secArrFrequency and the value was equal to secArrFrequency delete the secArrFrequency[number] else retuen false
        if(secArrFrequency[number] && secArrFrequency[number] === frequency) {
            delete secArrFrequency[number];
        } else {
            return false;
        }
    }

    // 2.b. if there is no item left in secArrFrequency return true, otherwise return false
    return !Object.entries(secArrFrequency).length;
}

console.log('(ans: true): ',isSquerd([1,2,3],[1,4,9]));
console.log('(ans: true): ',isSquerd([1,2,3],[4,1,9]));
console.log('(ans: true): ',isSquerd([1,2,1],[1,1,4]));
console.log('(ans: true): ',isSquerd([],[]));

console.log('(ans: false): ',isSquerd([1,2,3],[1,16,9]));
console.log('(ans: false): ',isSquerd([1,2,3],[1,9]));
console.log('(ans: false): ',isSquerd([1,2,3],[1,4,9,9]));
console.log('(ans: false): ',isSquerd([1,2,3],[1,4,9,25]));