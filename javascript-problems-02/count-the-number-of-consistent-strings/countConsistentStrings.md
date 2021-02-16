# Count the Number of Consistent Strings

## General Information

- Run Environment:
  - Node
- Problem Source:
  - Leetcode
- Problem Difficulty
  - Easy
- Source Link:
  - [ID: 1684](https://leetcode.com/problems/count-the-number-of-consistent-strings/)

## Details

### Description

You are given a string `allowed` consisting of *distinct* characters and an array of strings `words`. A string is *consistent* if all characters in the string appear in the string `allowed`.

Return the number of *consistent* strings in the array `words`.

&nbsp;

### Examples

> **`01`**
>>**Input :**
>>
>>      allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
>>
>>**Output :**
>>
>>      2
>>
>>**Explanation :**
>>
>> - Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
>>
>> &nbsp;
>>
> &nbsp;
>
> **`02`**
>>**Input :**
>>
>>      allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
>>
>>**Output :**
>>
>>      7
>>
>> - All strings are consistent.
>>
>> &nbsp;
>>
> &nbsp;

&nbsp;

### Constraints

- `1 <= words.length <= 10,000`
- `1 <= allowed.length <= 26`
- `1 <= words[i].length <= 10`
- The characters in `allowed` are *distinct*.
- `words[i]` and `allowed` contain only lowercase English letters.
