/**
 * The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 1){  
        return "1";  
     }  
          
    var s = "1";  
    var ret = "";  
    var count = 0;  
    var round = 1;          // round是迭代多少次  
    var i;  
    while(round < n){  
       count = 1;  
       ret="";  
       for(i=1; i<s.length; i++){  
            if(s.charAt(i) === s.charAt(i-1)){       // 重复的值，继续计数  
                count++;  
            }else{          // 有新的值出现，记录到ret  
                ret=ret+count;
                ret=ret+s.charAt(i-1);  
                count = 1;        // 重置count  
            }  
        }  
        ret=ret+count;
        ret=ret+s.charAt(i-1);  
        s = ret.toString(); // 更新s 
        round++; 
    }  
    return ret;  
};