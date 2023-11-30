/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let arr = [];
    let maxx = Math.max(...candies);
    candies.map( candy => {
        if (candy + extraCandies >= maxx){
            arr.push(true);
        }
        else {
            arr.push(false);
        }
    })

    return arr;
};
