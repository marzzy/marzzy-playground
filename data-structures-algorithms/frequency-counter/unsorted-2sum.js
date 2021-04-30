function twoSum(unsortedArr, target) {
    // inputs: unsortedArr: array, target: number
    // output: array of 2 items in unsortedArr

    // 1.loop over unsortedArr(item of arr)
    let helperObjct = {}
    for(item of unsortedArr) {
        // 1.a. if there is no helperObject[item] then add helperObjct[target-item]
        if(!helperObjct[item]) {
            helperObjct[target - item] = true;
        } else {
            // 1.b. else return [target - item, item]
            return [target - item, item];
        }
    }
    // 2. if there isnt anything return yet return false
    return false;
}

console.log('[4,2]: ',twoSum([1,3,4,2],6));
console.log('[3,3]: ',twoSum([3,3],6));
console.log('false: ',twoSum([-2,0,1,3],0));