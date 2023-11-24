/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function(n) {
    var called = 0
    return function() {
        called += 1;
        if (called == 1){
            return n
        }
        return n + (called - 1);
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
