/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return accounts.reduce((max, user) => {
    const userWealth = user.reduce((sum, wealthItem) => sum += wealthItem, 0);
    max = userWealth > max ? userWealth : max;
    return max;
  }, 0)
};

console.log('the answer is(6) : ', maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log('the answer is(10) : ', maximumWealth([[1, 5], [7, 3], [3, 5]]))
console.log('the answer is(17) : ', maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]))