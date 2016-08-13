/** 
 Write a function that takes a string as input and returns the string reversed.

 Example:
 Given s = "hello", return "olleh".

 Subscribe to see which companies asked this question
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var newString="",
         len = s.length,
         i = len-1;
    for (i;i>=0;i--){
        newString=newString+s[i];
    }
    return newString;
};

function reverseStringRecursive(str){
  if(str.length===1){
    return str;
  }
  return reverseString(str.substring(1))+str.charAt(0);

};