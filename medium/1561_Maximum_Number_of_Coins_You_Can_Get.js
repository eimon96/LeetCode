/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a, b) => b - a);

    // let tuples = [];
    let j = piles.length - 1
    let sum = 0
    for(let i = 0; i < j; i += 2){
        sum += piles[i + 1];
        // tuples = [...tuples, [ piles[i], piles[i + 1], piles[j] ] ];
        j -= 1
    }

    // let sum = 0;
    // for (let i = 0; i < tuples.length; i++ ){
    //     sum += tuples[i][1];
    // }
    return sum;
};

// 10 10 1
// 3 3 2
