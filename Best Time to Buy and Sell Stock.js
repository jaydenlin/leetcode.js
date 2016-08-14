/**
 * Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.
Subscribe to see which companies asked this question
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max = 0,
        len = prices.length, 
        i = 1,
        low = prices[0],
        high = low;
        
    for(i;i<len;i++){
        var cur = prices[i];
        if(cur > high){
            high = cur;
        }
        if(cur < low){
            high = cur;
            low = cur;
        }
        var profit = high - low;
        if(profit > max){
            max = profit;
        }
    }    
    return max;
};