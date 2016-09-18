/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }else if(x===0){
        return true;
    }else{
        var temp = x;
        var y = 0;
        //reverse x to y
        while(x!==0){
            y = y*10 + x%10;
            x = Math.floor(x/10);
        }
        if(y===temp){
            return true
        }else{
            return false;
        }
    }
};