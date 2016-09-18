/**
 * Given an integer, write a function to determine if it is a power of three.
Follow up: Could you do it without using any loop / recursion?
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n<=0){
        return false;
    }
    while(n>1){
        if(n%3!==0){ return false;}
        n=Math.floor(n/3);
    }
    return true;
};