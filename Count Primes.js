/**
 * Description:

Count the number of prime numbers less than a non-negative number, n.

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.

Show Hint 

 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var i,
        j,
        result = 0,
        prime;
    if (n === 1) {
        return 0;
    }
    for (i = 2; i < n; i++) {
        prime = true;
         // Loop's ending condition is j * j <= num instead of j<= sqrt(num)
        // to avoid repeatedly calling an expensive function sqrt().
        for (j = 2; j*j <= i; j++) {
            if (i%j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            result++;
        }
    }
    return result;
};