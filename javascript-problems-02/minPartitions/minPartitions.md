# Partitioning Into Minimum Number Of Deci-Binary Numbers

## General Information

- Run Environment:
  - Node
- Problem Source:
  - Leetcode
- Problem Difficulty
  - Medium
- Source Link:
  - [ID: 1689](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/)

## Details

### Description

A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

&nbsp;

### Examples

> **`01`**
>>**Input :**
>>
>>      n = "32"
>>
>>**Output :**
>>
>>      3
>>
>>**Explanation :**
>>
>> - 10 + 11 + 11 = 32
>>
>> &nbsp;
>>
> &nbsp;
>
> **`02`**
>>**Input :**
>>
>>      n = "82734"
>>
>>**Output :**
>>
>>      8
>> &nbsp;
>>
> &nbsp;

&nbsp;

### Constraints

- `1 <= n.length <= 105`
- `n` consists of only digits.
- `n` does not contain any leading zeros and represents a positive integer.
