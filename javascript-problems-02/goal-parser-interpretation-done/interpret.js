// 1th solution
// function interpret(str) {
//   //for each item in string
//   // if it wasn't (
//     //add it to res
//   //else
//     //if item[i+1] === )
//       // i++
//       //add 'o' to res
//     //else
//       // i += 3
//       //add 'al' to res

//   let result = [], stringArr = [...str];

//   for(let i=0; i<stringArr.length ;i++) {
//     if(stringArr[i] === '(') {
//       if(stringArr[i+1] === ')') {
//         i++;
//         result.push('o');
//         continue;
//       } else {
//         i += 3;
//         result.push('al');
//         continue;
//       }
//     }
//     result.push('G');
//   }

//   return result.join('');
// };


// 2nd solution
// var interpret = function(command) {
//   return command.split("()").join("o").split("(al)").join("al");
// };


// 3th solution
var interpret = function(command) {
  return command.replace(/\(al\)/g,"al").replace(/\(\)/g,"o");
};

console.log('(Goal): ', interpret("G()(al)"));
console.log('(Gooooal): ', interpret("G()()()()(al)"));
console.log('(alGalooG): ', interpret("(al)G(al)()()G"));