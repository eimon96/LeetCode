/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let indices = [];
    words.map( (word, index) => {
        if (word.includes(x)){
            indices.push(index);
        }
    })

    return indices;
};
