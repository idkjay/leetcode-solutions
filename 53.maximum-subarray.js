53. Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Solution:
let maxSubArray = function(nums) {
    for (let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums);
};

Explanation: 
1. Loop through array with for loop.
2. The Math.max() function returns the largest of zero or more numbers. Syntax: Math.max([value1[, value2[, ...]]])
3. All results from the loop sequence are put into another Math.max function where the largest value is returned.