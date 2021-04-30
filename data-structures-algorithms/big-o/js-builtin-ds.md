# Big O of Js built-in DataStructures

## Object

- Insertion & Removal                   -----> O(1)
- Searching                             -----> O(n)
- Access                                -----> O(1)
- Object.(keys, values, entries)        -----> O(n)
- obj.hasOwnProperty                    -----> O(1)

## Array

- Insertion & Removal(push & pop)       -----> O(1)
- Insertion & Removal(shift & unshift)  -----> O(n)
- Searching                             -----> O(n)
- Access                                -----> O(1)
- concat/slice/splice                   -----> O(n)
- sort                                  -----> O(n*logn)
- forEach/map/filter/reduce/etc         -----> O(n)
