/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let maxRow = mat.length
    let maxCol = mat[0].length

    let visitedMatrix = []
    for (let i = 0; i < maxRow; i++) {
        visitedMatrix.push([])
        for (let j =0; j < maxCol; j++) {
            visitedMatrix[i].push("notVisited")
        }
    }

    let result = []
    let queue = [[0, 0]]
    visitedMatrix[0][0] = "visited"
    let direction = true
    while (queue.length > 0) {

        let levelLength = queue.length
        if (direction === true) {
            for (let i =0 ; i < levelLength; i++) {
                result.push(mat[queue[i][0]][queue[i][1]])
            }
        } else {
            for (let i = levelLength - 1 ; i >= 0; i--) {
                result.push(mat[queue[i][0]][queue[i][1]])
            }
        }
        direction = !direction

        for (let i = 0; i < levelLength; i++) {
        let currentNode = queue.shift()
        let currentRow = currentNode[0]
        let currentCol = currentNode[1]
        if (currentRow + 1 < maxRow && visitedMatrix[currentRow + 1][currentCol] === "notVisited" ) {
            visitedMatrix[currentRow + 1][currentCol] = "visited"
            queue.push([currentRow + 1, currentCol])
        }
        if (currentCol + 1 < maxCol && visitedMatrix[currentRow][currentCol + 1] === "notVisited" ) {
            visitedMatrix[currentRow][currentCol + 1] = "visited"
            queue.push([currentRow, currentCol + 1])
        }}
    }

    return result
};
