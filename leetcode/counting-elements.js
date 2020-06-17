Counting Elements
Given an integer array arr, count element x such that x + 1 is also in arr.
If there 're duplicates in arr, count them seperately.

Example 1:

Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
Example 2:

Input: arr = [1,1,3,3,5,5,7,7]
Output: 0
Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
Example 3:

Input: arr = [1,3,2,3,5,0]
Output: 3
Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
Example 4:

Input: arr = [1,1,2,2]
Output: 2
Explanation: Two 1s are counted cause 2 is in arr.

Solution:
let countElements = function (arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        let x = arr[i];

        while (j < arr.length) {
            if (arr[j] === x + 1) {
                count++;
                j = arr.length;
            } else {
                j++
            }
        }
    }
    return count;
};

Explanation:
1. Set variable count to 0. 
2. For loop to iterate through arr array. 
3. Inside the loop, we are setting variable j to 0 and x for each arr[i].
3. While loop for while j that we set previously is less than arr.length. 
4. If conditional: arr[j] is equal to x + 1, if it is, we increment count and set j back to the arr.length. If it isn't, we increment j and then go through the loop again. 
5. At the end, we return our count variable. 