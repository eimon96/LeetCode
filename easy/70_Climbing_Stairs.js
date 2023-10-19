/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1){
        return 1;
    }

    if (n == 2){
        return 2;
    }

    a = 1
    b = 1
    for (let i = 2; i <= n; i++){
        b += a 
        a = b - a
    }
    return b
};
