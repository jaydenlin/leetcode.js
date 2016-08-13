/**
 * Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
 */

/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var arr = s.split('');
    var base =26;
    var sum = 0;
    var i = arr.length -1;
    var cursor =0;
    var getNumber = function(key){
        return key.charCodeAt(0)-64;
    }
    for(i;i>=0;i--){
        if(base*(cursor)===0){
            sum = sum + getNumber(arr[i]);
        }else{
            sum = sum + getNumber(arr[i])*Math.pow(base,cursor);
        }
        cursor++;
    }
    return sum;
    
};