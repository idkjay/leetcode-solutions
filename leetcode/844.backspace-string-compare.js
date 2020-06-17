844. Backspace String Compare
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Example 2:
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Example 3:
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Example 4:
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".

Note:
1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.

Solution:
let backspaceCompare = function (S, T) {
    let finalS = ''
    let finalT = ''

    for (let ch of S) {
        if (ch == '#' && typeof finalS !== 'undefined') {
            finalS = finalS.substring(0, finalS.length - 1)
        } else {
            finalS += ch
        }
    }

    for (let ch of T) {
        if (ch == '#' && typeof finalT !== 'undefined') {
            finalT = finalT.substring(0, finalT.length - 1)
        } else {
            finalT += ch
        }
    }

    return finalS == finalT
};

Explanation: 
1. Create both a finalS and finalT variable and set them to ''. 
2. For each S and T, we got a block of code to define em. 
For...of loops allow us to iterate over iterable objects; strings are iterable over. 
3. If conditional to see if the variable we have iterated from S and T is '#' and that the finalS or finalT are not undefined. 
4. substring() extracts characters from a string. 
5. Return boolean if finalS == finalT