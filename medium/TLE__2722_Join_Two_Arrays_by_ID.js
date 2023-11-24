/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let joinedArray = [...arr1];
    arr2.map( element => {
        let tEl = joinedArray.find( e => e.id == element.id ) || {};
        Object.assign(tEl, element);
        joinedArray = [...joinedArray.filter( e => e.id != element.id ), tEl];
    })
    return joinedArray.sort( (e1, e2) => e1.id - e2.id );
};
