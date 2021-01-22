//1th way
// function countSegments(str) {
//   return str.split(' ').reduce((segmentsCounter, item)=> item.length > 0 ? ++segmentsCounter : segmentsCounter, 0);
// };

//secound way
// function countSegments(str) {
//   let segmentsCounter = 0;

//   for(let i = 0; i < str.length; i++ ) {
//     if ((i ===0 || str[i-1] === ' ') && str[i] != ' ' ) {
//       segmentsCounter++;
//     }
//   }

//   return segmentsCounter;
// }

// 3th way 
function countSegments(str) {
  return [...str].reduce((segmentsCounter, char, i) => ((i === 0 || str[i-1] === ' ') && char != ' ' ) ? ++segmentsCounter : segmentsCounter ,0);
}

console.log('(5): ', countSegments("Hello, my name is John"));
console.log('(1): ', countSegments("Hello"));
console.log('(4): ', countSegments("love live! mu'sic forever"));
console.log('(0): ', countSegments(""));
console.log('(0): ', countSegments("                "));