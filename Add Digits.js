/**
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    if(String(num).split('').length === 1){
        return num;
    }else{
        var digits = String(num).split('');
        var numNum = 0;
        
        digits.forEach(function(d){           
            numNum = numNum + parseInt(d,10);
        });
        return addDigits(numNum);
    }
};