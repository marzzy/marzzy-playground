# Goal Parser Interpretation

## General Information

- Run Environment:
  - Node
- Problem Source:
  - Leetcode
- Problem Difficalty
  - easy
- Source Link:
  - [ID: 1678](https://leetcode.com/problems/goal-parser-interpretation/)

## Details
### Description
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.
<br/>

### Examples

> 01:
>>Input: command = "G()(al)"
>>
>>Output: "Goal"
>>
>>Explanation: 
>>>The Goal Parser interprets the command as follows:
>>>G -> G
>>>
>>>() -> o
>>>
>>>(al) -> al
>>>
>>>The final concatenated result is "Goal".
>
> 02:
>>Input: command = "G()()()()(al)"
>>
>>Output: "Gooooal"
>
> 03:
>>Input: command = "(al)G(al)()()G"
>>
>>Output: "alGalooG"

<br/>

### Note

  - 1 <= command.length <= 100
  - command consists of "G", "()", and/or "(al)" in some order.
