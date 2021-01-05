# Shuffle String

## General Information

- Run Environment:
  - Node
- Problem Source:
  - Leetcode
- Problem Difficulty:
  - Easy
- Source Link:
  - [ID: 1528](https://leetcode.com/problems/shuffle-string/)

## Details

### Description

Given a string `s` and an integer array `indices` of the same length.

The string `s` will be shuffled such that the character at the `ith` position moves to `indices[i]` in the shuffled string.

Return the shuffled string.

&nbsp;

### Examples

> **`01`**
>>**Input :**
>>
>>      s = "codeleet", indices = [4,5,6,7,0,2,1,3]
>>
>>**Output :**
>>
>>      "leetcode"
>>
>>**Explanation :**
>>
>> - As shown, "codeleet" becomes "leetcode" after shuffling.
>
> **`02`**
>>**Input :**
>>
>>      s = "abc", indices = [0,1,2]
>>
>>**Output :**
>>
>>      "abc"
>>
>
> **`03`**
>>**Input :**
>>
>>      s = "aiohn", indices = [3,1,4,2,0]
>>
>>**Output :**
>>
>>      "nihao"
>>
>

&nbsp;

### Constraints

- `s.length == indices.length == n`
- `1 <= n <= 100`
- `s` contains only lower-case English letters
- `0 <= indices[i] < n`
- All values of `indices` are unique (i.e. `indices` is a permutation of the integers from `0` to `n - 1`).
