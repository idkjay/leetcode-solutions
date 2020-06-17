136. Single Number 
Given a non-empty array of integers, every element appears twice except for one.Find that single one.

Input: [2, 2, 1] 
Output: 1

Solution: 
let singleNumber = function (nums) {
    nums.sort();
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
};

Explanation: 
nums.sort() //sorts the integers in the nums array numerically, least to greatest 
for(let i = 0; i < nums.length; i += 2) //loops through the array 
if(nums[i] !== nums[i + 1]) //comparing first number with second number, if they aren't the same and since it's sorted that means the first number is an element that appears only once, so we return that otherwise we do 
i += 2 //to skip those two numbers since they're the same