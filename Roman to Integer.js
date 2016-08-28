/**
 * Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

Subscribe to see which companies asked this question

Show Tags
Show Similar Problems

 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var result = 0; 
    s = s.toUpperCase();
    var map={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };
    var toNum = function(v){
        var r = map[v];
        return typeof r === "undefined" ? 0 : r;
    }
    var i=0;
    
    for(i;i<s.length;i++){
        var num = toNum(s[i]);
        var numPrev = i-1 >= 0 ? toNum(s[i-1]):0;
        if(num!==0 && numPrev!==0 && numPrev < num){
            result = result + num - 2*numPrev;// IV case
        }else{
            result = result + num;
        }
        
    }
    return result;
    
};