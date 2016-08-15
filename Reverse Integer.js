/**
 * Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

click to show spoilers.

Have you thought about this?
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Update (2014-11-10):
Test cases had been added to test the overflow behavior.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNegative = x < 0; 
    var ans = 0;
    var r = 0;
    var base =10;
    if(x===0){
        return 0;
    }
    if(isNegative){
        x = x*(-1);
    }
    while(x !== 0){
        r = x%base;
        ans = ans*base + r;
        //prevent double type
        x = Math.floor(x/base);
    }
    if(ans >= Math.pow(2,31)){
        return 0;
    }
    
    if(isNegative){
        ans = ans*(-1);
    }
    
    return ans;
    
};