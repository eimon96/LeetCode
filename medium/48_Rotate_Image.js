/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // Transpose
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Swap Columns
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse()
    }
};
