/**
 * Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var r = 0;
    var result =0;
    var map = new Set();
    if(result >= Math.pow(2,31)){
        return false;
    }
    
    while(true){
        while(n!==0){
            r = n%10;
            result = result + Math.pow(r,2);
            n = Math.floor(n/10);
        }
        //Case 1. the number shows up repeatedly
        if(map.has(result)){
            return false;
        }
        //Case 2. happ number founed
        if(result === 1){
            return true;
        }
        //next round
        map.add(result);
        n = result;
        result = 0 ;
    }
    
};