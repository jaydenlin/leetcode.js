/**
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

 */
var firstUniqChar = function(s) {
    var map=new Set();
    var candidates=new Set();
    var arr = s.split('');
    for(var i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            candidates.delete(arr[i]);
        }else{
            map.add(arr[i]);
            candidates.add(arr[i]);
        }
    }
    var [ans] = candidates;
    return s.indexOf(ans);
};