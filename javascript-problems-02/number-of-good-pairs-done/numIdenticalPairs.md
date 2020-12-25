# Number of Good Pairs

## General Information

- Run Environment:
  - Node
- Problem Source:
  - Leetcode
- Problem Difficalty
  - easy
- Source Link:
  - [ID: 1512](https://leetcode.com/problems/number-of-good-pairs/)

## Details

### Description

  Given an array of integers nums.
  A pair (i,j) is called good if nums[i] == nums[j] and i < j.
  Return the number of good pairs.
&nbsp;

### Examples

> 01:
>>input: nums = [1,2,3,1,1,3]
>>
>>output: 4
>>
>>Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
>
> 02:
>>input: nums = [1,1,1,1]
>>
>>output: 6
>>
>>Explanation: Each pair in the array are good.
>
> 03:
>>input: nums = [1,2,3]
>>
>>output: 0

&nbsp;

### Constraints

- 1 <= nums.length <= 100
- 1 <= nums[i] <= 100
