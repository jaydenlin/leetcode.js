/**
 * Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.

 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var result ="";
    var map={
        "1000":"M",
        "900":"CM",
        "500":"D",
        "400":"CD",
        "100":"C",
        "90":"XC",
        "50":"L",
        "40":"XL",
        "10":"X",
        "9":"IX",
        "5":"V",
        "4":"IV",
        "1":"I"
    };
    var toRom = function(v){
        var r = map[v];
        return typeof r === "undefined" ? "" : r;
    }
    Object.keys(map).reverse().forEach(function(k){
      
        k = Number(k);
        
        if(num >= k){
            var n = Math.floor(num/k);
            num = num - k*n;
            while(n>0){
                result = result + toRom(String(k));
                n--;
            }
        }
        
    });
    
    return result;
};