// function isAnagram(firstStr, secStr) {
//     // input: firstStr: string, secStr: string
//     // output: boolean

//     // 1. make 2 frecuencyChar object from each str
//     let firstStrFrequencyChar = {};
//     let secStrFrequencyChar = {};

//     firstStr.split('').forEach(char => {firstStrFrequencyChar[char] = ++firstStrFrequencyChar[char] || 1});
//     secStr.split('').forEach(char => {secStrFrequencyChar[char] = ++secStrFrequencyChar[char] || 1});

//     // 2. findout if the 2 frequency object are the same or not
//     for(item of Object.entries(firstStrFrequencyChar)) {
//         [char, frequency] = item;
        
//         // 2.a if there is 'char' item in secStrFrequency && secStrFrequency[char] was equal to 'frequency' delete the secStrFrequency else return false
//         if (!!secStrFrequencyChar[char] && secStrFrequencyChar[char] === frequency) {
//             delete secStrFrequencyChar[char];
//         } else {
//             return false;
//         }
//     }

//     // 2.b. if secStrFrequencyChar was empty return true otherwise false
//     return !Object.keys(secStrFrequencyChar).length
// }

function isAnagram(firstStr, secStr) {
    // input: firstStr: string, secStr: string
    // output: boolean

    // 1. check if the inputs have the equal letters of not, if not return false
    if (firstStr.length !== secStr.length) return false;
    
    //   So far there are 2 str with the same length, so if all of the letters are exist in both of them & the frequency of them are the same we can return true 
    // 2. make an object(firstFrequencyCounter) based on firstStr ,contains its chars and theirs frequencies
    let firstFrequencyCounter = {};
    [...firstStr].forEach(char => {firstFrequencyCounter[char] = ++firstFrequencyCounter[char] || 1});

    // 3. loop over chars in secStr(each one 'char')
    for(secStrChar of [...secStr]) {
        // 3.a. if 'char' was a key to firstFrequencyCounter && firstFrequencyCounter['char'] wasnt 0
        //         then decrease it with one else return false
        if (firstFrequencyCounter[secStrChar] && firstFrequencyCounter[secStrChar] > 0) {
            --firstFrequencyCounter[secStrChar];
        } else {
            return false;
        }
    }

    // 4. if it doesnt exit the function with false yet, return true
    return true;
}

console.log('true: ',isAnagram('',''));
console.log('true: ',isAnagram('apple','apple'));
console.log('true: ',isAnagram('apple','elppa'));
console.log('true: ',isAnagram('apple','eaplp'));

console.log('false: ',isAnagram('apple','aple'));
console.log('false: ',isAnagram('apple','applo'));
console.log('false: ',isAnagram('apple','cherry'));