/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let number = [];
    for (let i = 0; i < arr.length; i++){
        number[i] = fn(arr[i], i)
    }

    return number;
};
