# Decompress Run-Length Encoded List

## General Information

- Run Environment:
  - Node
- Problem Source:
  - Leetcode
- Problem Difficulty
  - Easy
- Source Link:
  - [ID: 1313](https://leetcode.com/problems/decompress-run-length-encoded-list/)

## Details

### Description

We are given a list `nums` of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements `[freq, val] = [nums[2*i], nums[2*i+1]]` (with `i >= 0`).
For each such pair, there are `freq` elements with value `val` concatenated in a sub list. Concatenate all the sub lists from left to right to generate the decompressed list.

Return the decompressed list.

&nbsp;

### Examples

> **`01`**
>>**Input :**
>>
>>      nums = [1,2,3,4]
>>
>>**Output :**
>>
>>      [2,4,4,4]
>>
>>**Explanation :**
>>
>> - The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
>> - The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
>> - At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
>
> **`02`**
>>**Input :**
>>
>>      nums = [1,1,2,3]
>>
>>**Output :**
>>
>>      [1,3,3]
>>
>

&nbsp;

### Constraints

- `2 <= nums.length <= 100`
- `nums.length % 2 == 0`
- `1 <= nums[i] <= 100`
