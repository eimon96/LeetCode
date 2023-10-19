/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    if (hasDuplicates(timePoints)){
        return 0
    }

    arr = []
    for(let i = 0; i < timePoints.length; i++){
        hh = timePoints[i].split(':')[0]
        mm = timePoints[i].split(':')[1]
        M = parseInt(hh) * 60 + parseInt(mm)
        arr.push(M)
    }

    min_diff = 1440
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
        
            date = new Date("2023-10-19T00:00:00.000Z")
            date.setMinutes(arr[i])
            date2 = new Date("2023-10-19T00:00:00.000Z")
            date2.setMinutes(arr[j])

            diff = Math.abs( (date - date2) / 60  / 1000 )
            a1 = arr[i] < 720 ? arr[i] + 1440 : arr[i]
            a2 = arr[j] < 720 ? arr[j] + 1440 : arr[j]
            diff2 = Math.abs(a1 - a2)
            
            min = Math.min(diff, diff2)
            if (min_diff > min){
                min_diff = min
            }
        }
    }

    return min_diff
};

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}
