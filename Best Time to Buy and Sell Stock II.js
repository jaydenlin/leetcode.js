/**
 * Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length,
        low = prices[0],
        high = prices[0],
        prev = low,
        max = 0,
        temp = 0,
        i =1;
    for(i;i<len;i++){
        var cur = prices[i];
        if(cur > prev){
            high = cur;
            //keep overwriting the temp to get the largest temp
            temp = high - low;
        }
        if(cur < prev){
            temp = high - low;
            //yield the temp
            max = max + temp;
            temp = 0;
            low = cur;
            high = cur;
        }
        
        prev = cur;
        
    }    
    if(temp !== 0){
        max = max + temp;
    }
    return max;
        
    
};