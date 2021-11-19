/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let highestOnMyLeft = 0
    let highestOnMyLeftArray = []
    for (let wall of height) {
        highestOnMyLeft = Math.max(highestOnMyLeft, wall)
        highestOnMyLeftArray.push(highestOnMyLeft)
    }

    let highestOnMyRight = 0
    let highestOnMyRightArray = Array(height.length).fill(0)
    for (let i = height.length -1 ; i >=0; i--) {
        highestOnMyRight = Math.max(highestOnMyRight, height[i])
        highestOnMyRightArray[i] = highestOnMyRight
    }

    let sum = 0
    for (let i =0 ; i < height.length; i++) {
        sum += Math.min(highestOnMyLeftArray[i], highestOnMyRightArray[i]) - height[i]
    }

    return sum
};

console.log(trap([4,2,0,3,2,5]))
