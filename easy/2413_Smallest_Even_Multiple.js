/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let rr = 1
    for(let i = n; i <= n*2; i++){
        if (i % 2 == 0 && i % n == 0){
            rr = i
            break;
        }
    }
    return rr;
};
