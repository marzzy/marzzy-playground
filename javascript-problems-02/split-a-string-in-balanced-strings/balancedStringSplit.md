# Split a String in Balanced Strings

## General Information

- Run Environment:
  - Node
- Problem Source:
  - Leetcode
- Problem Difficulty
  - Easy
- Source Link:
  - [ID: 1221](https://leetcode.com/problems/split-a-string-in-balanced-strings/)

## Details

### Description

`Balanced` strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string `s` split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

&nbsp;

### Examples

> **`01`**
>>**Input :**
>>
>>      s = "RLRRLLRLRL"
>>
>>**Output :**
>>
>>      4
>>
>>**Explanation :**
>>
>> `s` can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
>>
>> &nbsp;
>>
> &nbsp;
>
> **`02`**
>>**Input :**
>>
>>      s = "RLLLLRRRLR"
>>
>>**Output :**
>>
>>      3
>> &nbsp;
>>
> &nbsp;

&nbsp;

### Constraints

- `1 <= s.length <= 1000`
- `s[i] = 'L' or 'R'`
