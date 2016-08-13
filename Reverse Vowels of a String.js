/**
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
 */
var reverseVowels = function(s) {
    var indexes =[],
        vowelArr = [],
        wordArr = s.split('');
    
    wordArr.forEach(function(w,index){
        if(/[aeiou]|[AEIOU]/.exec(w)!==null){
           indexes.push(index); 
           vowelArr.push(w);
        }
    });
    
    var len = indexes.length;
    indexes.forEach(function(w,index){
        //use the trick of pop to do reverse
        wordArr[indexes[index]]=vowelArr.pop();
    });
    return wordArr.join('');
    
};