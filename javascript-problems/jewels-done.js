// Run Environment:        Node
// Name:                   numJewelsInStones
// Problem Source:         leetcode
// Problem Difficalty:     easy
// Source Link:            -

// Runtime: 84 ms, faster than 63.66% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 40.2 MB, less than 39.19% of JavaScript online submissions for Jewels and Stones.
function numJewelsInStones(J, S) {
    //make a hashmap from j, with key of the j items and value of 0 for each
    //for item in s
      // if hashmap has the item as key , increase its value
    //sum hashmaps values and return sum

    let hashmap = new Map([...J].map(jewel => [jewel, 0]));

    [...S].forEach((stone) => {
      if (hashmap.has(stone)) {
        const counter = hashmap.get(stone);
        hashmap.set(stone, counter + 1)
      }
    })
    return [...hashmap].reduce((sum, jewelDetails) => {
        return sum + jewelDetails[1];
    }, 0)
}

// Runtime: 84 ms, faster than 63.66% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 39 MB, less than 55.80% of JavaScript online submissions for Jewels and Stones.
function numJewelsInStones(J, S) {
    let hashmap = new Set([...J]);
    let counter = 0;

    [...S].forEach((stone) => {
      if (hashmap.has(stone)) counter++;
    })

    return counter;
}


// Runtime: 80 ms, faster than 82.22% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 38.8 MB, less than 70.96% of JavaScript online submissions for Jewels and Stones.
var numJewelsInStones = function(J, S) {
  let count = 0;
  
  for (const stone of S) {
      const isJewel = J.includes(stone);
      if ( isJewel ) {
          count++;
      }
  }
  
  return count;
};

console.log('(3): ', numJewelsInStones("aA", "aAAbbbb"));
console.log('(0): ', numJewelsInStones("z", "ZZZ"));