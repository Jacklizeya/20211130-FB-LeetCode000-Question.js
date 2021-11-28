/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let maxRow = matrix.length
    let maxCol = matrix[0].length
    
    let startingLocations = []
    for (let row = maxRow - 1; row >=0; row--) {
        startingLocations.push([row, 0])
    }
    for (let col = 1; col <= maxCol - 1; col++) {
        startingLocations.push([0, col])
    }
    
    for (let location of startingLocations) {
        let row = location[0]
        let col = location[1]
        if (!isSame(row, col)) {return false}
    }
    
    return true
    
    function isSame(row, col) {
        let value = matrix[row][col]
        while (row < maxRow && col < maxCol) {
            if (matrix[row][col] !== value) {return false}
            row++
            col++
        }
        return true
    }
    
};
