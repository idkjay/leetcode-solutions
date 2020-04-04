283. Move Zeroes
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations.

Solution:
let moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++ ){
        if (nums[i] === 0) {
            nums.push(nums.splice(nums.indexOf(nums[i]), 1)[0]);
        }
    }
};

Explanation:
1. Loop through array with for loop.
2. If nums[i] is equal to 0, we go into our if conditional statement.
3. We splice that number and then push it back into the nums array. 