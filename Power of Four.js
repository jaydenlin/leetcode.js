/**
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?

Credits:
Special thanks to @yukuairoy for adding this problem and creating all test cases.

Subscribe to see which companies asked this question
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n<=0){
        return false;
    }
    while(n>1){
        if(n%4!==0){ return false;}
        n=Math.floor(n/4);
    }
    return true;
};