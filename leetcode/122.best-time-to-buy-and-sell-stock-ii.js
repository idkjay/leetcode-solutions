122. Best Time to Buy and Sell Stock II 
Say you have an array
for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit.You may complete as many transactions as you like(i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time(i.e., you must sell the stock before you buy again).

Input: [7, 1, 5, 3, 6, 4]
Output: 7
Explanation: Buy on day 2(price = 1) and sell on day 3(price = 5), profit = 5 - 1 = 4.
Then buy on day 4(price = 3) and sell on day 5(price = 6), profit = 6 - 3 = 3.

Input: [7, 6, 4, 3, 1]
Output: 0
Explanation: In this
case, no transaction is done, i.e.max profit = 0.

Solution:
var maxProfit = function (prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        let j = i + 1;
        if (prices[i] < prices[j]) {
            maxProfit += prices[j] - prices[i];
        }
    }
    return maxProfit;
};

Explanation:
1. Declare variable maxProfit and set it to 0, that's what we'll be returning at the end.
2. For loop to go through the prices array.
3. Create a j variable and set it to "i + 1".
4. If conditional where we compare prices[i] and prices[j]. If prices[i] is less than prices[j], which means there's potential profit, we move on and update our maxProfit variable from the beginning. We will go through the entire array looking for a higher maxProfit until we make it it to the end of the array. 
5. With that done, we return maxProfit. 