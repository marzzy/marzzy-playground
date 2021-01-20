# Maximum Product of Word Lengths

## General Information

- Run Environment:
  - Node
- Problem Source:
  - Leetcode
- Problem Difficulty
  - Medium
- Source Link:
  - [ID: 318](https://leetcode.com/problems/maximum-product-of-word-lengths/)

## Details

### Description

Given a string array `words`, find the maximum value of `length(word[i]) * length(word[j])` where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.
&nbsp;

### Examples

> **`01`**
>>**Input :**
>>
>>      ["abcw","baz","foo","bar","xtfn","abcdef"]
>>
>>**Output :**
>>
>>      16
>>
>>**Explanation :**
>>
>> - The two words can be "abcw", "xtfn".
>
> **`02`**
>>**Input :**
>>
>>      ["a","ab","abc","d","cd","bcd","abcd"]
>>
>>**Output :**
>>
>>      4
>>
>>**Explanation :**
>>
>> - The two words can be "ab", "cd".
>>
>
> **`03`**
>>**Input :**
>>
>>      ["a","aa","aaa","aaaa"]
>>
>>**Output :**
>>
>>      0
>>
>>**Explanation :**
>>
>> - No such pair of words.
>>
>

&nbsp;

### Constraints

- `0 <= words.length <= 10^3`
- `0 <= words[i].length <= 10^3`
- `words[i]` consists only of lowercase English letters.
