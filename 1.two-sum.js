1. Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].

Solution:
const twoSum = function (nums, target) {
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                results.push(i)
                results.push(j)
            }
        }
    }
    return results;
};

Explanation:
let results = []; //creating an empty array to store wanted numbers
for (let i = 0; i < nums.length; i++) //first loop to loop through for first number
for (let j = i + 1; j < nums.length; j++) //second loop looking for second number, j is i + 1 because we're looking for a j number to build off i
if (nums[i] + nums[j] === target) {
    results.push(i)
    results.push(j)
} //adding the sum of i and j and comparing them to see if theyre the same value as the target, if they are, we push those two numbers into the empty results array and then return them
