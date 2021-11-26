/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {

    let maxRow = grid.length
    let maxCol = grid[0].length
    let explorationMatrix = []

    for (let i = 0; i < maxRow; i++) {
        explorationMatrix.push([])
        for (let j = 0; j < maxCol; j++) {
            explorationMatrix[i].push("unknown")
        }
    }

    // console.log(explorationMatrix)
    let islandGroup = 0
    let islandAreas = {}

    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (explorationMatrix[i][j] === "unknown") {
                if (grid[i][j] === 1) { explorationMatrix[i][j] = "group" + islandGroup; expand(i, j) } else { explorationMatrix[i][j] = "visited zero" }
            }
        }
    }
    // console.log(islandGroup, "islandAreas", islandAreas, "explorationMatrix", explorationMatrix)

    // 
    let result = -Infinity
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {
            if (explorationMatrix[i][j] === "visited zero") { maxArea = checkSurroundingIslandsArea(i, j) + 1; result = Math.max(result, maxArea) }
        }
    }
    if (result === -Infinity) { result = maxCol * maxRow }

    return result

    // the expand function
    function expand(row, col) {
        let islandArea = 0
        let queue = [[row, col]]
        while (queue.length > 0) {
            let currentNode = queue.shift()
            // console.log("while loop 46 after deleting the first one", queue, queue.length)
            let currentRow = currentNode[0]
            islandArea++
            let currentCol = currentNode[1]
            // console.log("currentRow", currentRow, "currentCol", currentCol)
            if (currentRow - 1 >= 0 && explorationMatrix[currentRow - 1][currentCol] === "unknown") {
                // console.log("up a ")
                if (grid[currentRow - 1][currentCol] === 0) { explorationMatrix[currentRow - 1][currentCol] = "visited zero" }
                else {
                    explorationMatrix[currentRow - 1][currentCol] = "group" + islandGroup
                    queue.push([currentRow - 1, currentCol])
                }
            }
            if (currentRow + 1 < maxRow && explorationMatrix[currentRow + 1][currentCol] === "unknown") {
                // console.log("down a")
                if (grid[currentRow + 1][currentCol] === 0) { explorationMatrix[currentRow + 1][currentCol] = "visited zero" }
                else {
                    explorationMatrix[currentRow + 1][currentCol] = "group" + islandGroup
                    queue.push([currentRow + 1, currentCol])
                }
            }
            if (currentCol - 1 >= 0 && explorationMatrix[currentRow][currentCol - 1] === "unknown") {
                // console.log("left a")
                if (grid[currentRow][currentCol - 1] === 0) { explorationMatrix[currentRow][currentCol - 1] = "visited zero" }
                else {
                    explorationMatrix[currentRow][currentCol - 1] = "group" + islandGroup
                    queue.push([currentRow, currentCol - 1])
                }
            }
            if (currentCol + 1 < maxCol && explorationMatrix[currentRow][currentCol + 1] === "unknown") {
                // console.log("right a")
                if (grid[currentRow][currentCol + 1] === 0) { explorationMatrix[currentRow][currentCol + 1] = "visited zero" }
                else {
                    explorationMatrix[currentRow][currentCol + 1] = "group" + islandGroup
                    queue.push([currentRow, currentCol + 1])
                }
            }
            // console.log("line 79", "queue", queue)
        }
        islandAreas["group" + islandGroup] = islandArea
        islandGroup++
    }

    // the check surrounding area function
    function checkSurroundingIslandsArea(i, j) {
        let total = 0
        let set = new Set()
        if (i - 1 >= 0 && explorationMatrix[i - 1][j] !== "visited zero" && !(set.has(explorationMatrix[i - 1][j]))) { set.add(explorationMatrix[i - 1][j]); total += islandAreas[explorationMatrix[i - 1][j]] }
        if (i + 1 < maxRow && explorationMatrix[i + 1][j] !== "visited zero" && !(set.has(explorationMatrix[i + 1][j]))) { set.add(explorationMatrix[i + 1][j]); total += islandAreas[explorationMatrix[i + 1][j]] }
        if (j - 1 >= 0 && explorationMatrix[i][j - 1] !== "visited zero" && !(set.has(explorationMatrix[i][j - 1]))) { set.add(explorationMatrix[i][j - 1]); total += islandAreas[explorationMatrix[i][j - 1]] }
        if (j + 1 < maxCol && explorationMatrix[i][j + 1] !== "visited zero" && !(set.has(explorationMatrix[i][j + 1]))) { set.add(explorationMatrix[i][j + 1]); total += islandAreas[explorationMatrix[i][j + 1]] }
        return total
    }

};

// console.log(largestIsland(
//     [[1, 0], [0, 1]]
// ))
// console.log(largestIsland(
//     [[1, 1], [0, 1]]
// ))
// console.log(largestIsland(
//     [[1, 1], [1, 1]]
// ))
