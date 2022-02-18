// function areThereDuplicates(arr) {
//     // inputs: arr: array
//     // output : boolean

//     // 1. make an frequency object from arr items
//     let frequencyObj = {}
//     for(item of arr) {
//         // 1.a. if there is already an item in object, return true
//         if(frequencyObj[item]) {
//             return true;
//         }
//         frequencyObj[item] = true;
//     }

//     // 2. if there isnt any of items in object that have more than one frequency return false
//     return false;
// }

function areThereDuplicates(arr) {
    let uniqArr = new Set(arr);
    return uniqArr.size !== arr.length;
}

console.log('false: ',areThereDuplicates([1, 2, 3]));
console.log('true: ',areThereDuplicates([1, 2, 2]));
console.log('true: ',areThereDuplicates(['a', 'b', 'c', 'a']));
console.log('true: ',areThereDuplicates(['a', 'b', 'a']));