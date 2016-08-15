/**
 * Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note that 1 is typically treated as an ugly number.
 */
/**
 * @param {number} n
 * @return {number}
 */
/**
 * http://fisherlei.blogspot.tw/2015/10/leetcode-ugly-number-ii-solution.html
 * Merge Sort的一个扩展题。
对于任意一个ugly number - K, 2*K, 3*K, 和5*K都是ugly number，所以说新的ugly number都是从已有的ugly number上，通过与{2,3,5}相乘而产生的。
如果
Ugly Number:       1,         2,          3,           4,           5,           6,            8,         10,     ..............
那么                1*2       2*2         3*2          4*2          5*2          6*2           8*2        10*2  .............. *2
                   1*3       2*3         3*3          4*3          5*3          6*3           8*3        10*3  .............. *3
                   1*5       2*5         3*5          4*5          5*5          6*5           8*5        10*5  .............. *5
都是ugly number。只要不断把新产生的ugly number通过merge sort添加到原有的ugly number数组中就可以了，直到找到第N个。
 */
var nthUglyNumber = function(n) {
    var p2=0 , p3=0, p5=0;
    var cur2,cur3,cur5;
    var cur;
    var result = [1];
    var i = 1;
    
    for(i;i<n;){
        
        cur2 = result[p2]*2;
        cur3 = result[p3]*3;
        cur5 = result[p5]*5;
        cur = Math.min(cur2,cur3,cur5);
        if(cur === cur2){
            p2++;
        }
        if(cur === cur3){
            p3++;
        }
        if(cur === cur5){
            p5++;
        }
        if(cur !== result[i-1]){
            result.push(cur);
            i++;   
        }
    }
    return result.pop();
};