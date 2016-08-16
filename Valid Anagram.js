/**
 * Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sLen = s.length;
    var i =0;
    var map = {};
    if(s.length !== t.length){
        return false;
    }
    var sArr = s.split('');
  
    for(i;i<sLen;i++){
        var re = RegExp(sArr[i],"g");
        if(!map[re]){
            var tMatch = t.match(re);
            if(tMatch === null){
                return false;
            }
            if(s.match(re).length !== tMatch.length){
                return false;
            }
            map[re]=true;
        }
    }
 
    return true;
    
};