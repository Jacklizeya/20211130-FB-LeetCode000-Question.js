/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    
    let max = -Infinity
    let stack = []
    
    for (let i = heights.length -1; i>=0 ; i--) {
        if (heights[i] > max) {stack.push(i); max = heights[i]}
    }
    
    let result = []
    for (let i = stack.length - 1; i>=0; i--) {
        result.push(stack[i])
    }
    return result
};
