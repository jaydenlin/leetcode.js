/**
 * Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.

spoilers alert... click to show requirements for atoi.

Requirements for atoi:
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
        var strArr = str.split(''),
        target = "",
        i = 0;
    for(i;i<strArr.length;i++){
        if(strArr[i]!==' '){
           //find th next non-Number index, 
           //i+1 is the offset of str, I get the correct index of str by adding the offset     
           var cut = str.substring(i+1).search(/(?!\d+)/)+i+1;
           //if the cut out of range menas that the cut could not be founed
           if(cut > strArr.length-1 ){
              target = str.substring(i);
           }else{
              target = str.substring(i,cut); 
           }
           break; 
        }
    }
    console.log(target);
    var num = parseInt(target);
        //Case 1. Invalid Number
        var ans = Number(num);
        if(isNaN(ans)){
            return 0;
        }
        //Case 2. Max or Min  
        if(ans > 2147483647){
            return 2147483647;
        }
        if(ans < -2147483648){
            return -2147483648;
        }
        return ans;
    
};