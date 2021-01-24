# XOR Operation in an Array

## General Information

- Run Environment:
  - Node
- Problem Source:
  - Leetcode
- Problem Difficulty
  - Easy
- Source Link:
  - [ID: 1486](https://leetcode.com/problems/xor-operation-in-an-array/)

## Details

### Description

Given an integer `n` and an integer `start`.

Define an array `nums` where `nums[i] = start + 2*i` (0-indexed) and `n == nums.length`.

Return the bitwise XOR of all elements of nums.

&nbsp;

### Examples

> **`01`**
>>**Input :**
>>
>>      n = 5, start = 0
>>
>>**Output :**
>>
>>      8
>>
>>**Explanation :**
>>
>> - Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
>> - Where "^" corresponds to bitwise XOR operator.
>>
>> &nbsp;
>>
> &nbsp;
>
> **`02`**
>>**Input :**
>>
>>      n = 4, start = 3
>>
>>**Output :**
>>
>>      8
>> &nbsp;
>>
> &nbsp;

&nbsp;

### Constraints

- `1 <= n <= 1000`
- `0 <= start <= 1000`
- `n == nums.length`
