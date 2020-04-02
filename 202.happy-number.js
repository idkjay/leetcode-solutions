202. Happy Number
Write an algorithm to determine
if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1(where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers
for which this process ends in 1 are happy numbers.

Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Solution (Javascript):
let isHappy = function (n) {
    let map = {}, num;

    while (!map[n]) {
        map[n] = true;

        num = 0
        while (n > 0) {
            num += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }
        if (num === 1) {
            return true;
        }
        n = num;
    }
    return false;
};


Solution (Go):
func isHappy(n int) bool {
    num: = 0

    // if n = 0 then true
    if n == 0 {
        return true
    }
    //while loop
    for num != 1 {

        // Reset num to 0 so you can get a new sum.
        num = 0

        // Create an array to store each place in n.
        places: = make([] int, 0)

        // Separate each place in n into an array and append it to the array called places.
        for n > 0 {
            places = append(places, n % 10)
            n /= 10
        }

        // Calculate if it is happy but summing the squares of the places by looping through all the values in places.
        for i: = 0;
        i < len(places);
        i++{
            num += places[i] * places[i]
        }

        // Update n to num
        n = num
    }
    return true
}
