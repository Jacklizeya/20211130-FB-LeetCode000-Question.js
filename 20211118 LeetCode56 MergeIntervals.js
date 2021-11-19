/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) =>{ return a[0] - b[0]})
    
    if (intervals.length === 1) {return intervals}    

    let result = []    
    let potentialInterval = [intervals[0][0], intervals[0][1]]
    for (let i = 1 ; i < intervals.length; i++) {
        if (potentialInterval[1] < intervals[i][0]) {
            result.push(potentialInterval)
            potentialInterval = [intervals[i][0], intervals[i][1]]
        } else {
            potentialInterval = [potentialInterval[0], Math.max(potentialInterval[1], intervals[i][1])]
        }
    }
    result.push(potentialInterval)
    return result
};
