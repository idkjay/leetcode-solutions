49. Group Anagrams
Given an array of strings, group anagrams together.

Input: 
["eat", "tea", "tan", "ate", "nat", "bat"],
Output: 
[
    ["ate", "eat", "tea"],
    ["nat", "tan"],
    ["bat"]
]

Solution: 
let groupAnagrams = function (strs) {
    let map = {}

    for (let str of strs) {
        let key = [...str].sort()
        map[key] = map[key] ? [...map[key], str] : [str]
    }

    return Object.values(map)
};

Explanation:
1. Create a hash object, map.
2. Use a for... of loop to iterate through each element in the strs array.It invokes a custom iteration hook with statements to be executed
for the value of each distinct property of the object.
3. Create an empty array, key, that gets all the elements of the strs array pushed into it, sorted alphabetically.
4. The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement. (1+1==2) ? "Pass" : "Fail"

So we're able to add each str to the array under which their key or category exists. 
5. We then return these arrays by looping over the values for each category/key. 
The Object.values() method returns an array of a given object 's own enumerable property values, in the same order as that provided by a for...in loop.