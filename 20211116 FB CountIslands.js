function countIslands(matrix) {

    let markerMatrix = []
    let rowMax = matrix.length
    let colMax = matrix[0].length
    let isLandCount = 0
    // build the marker matrix
    let initialRow = Array(colMax).fill("unvisited")
    for (let i = 0; i < rowMax; i++) {
        markerMatrix.push([...initialRow])
    }
    console.log("marker Matrix", markerMatrix)
    // look for island to expand
    for (let i = 0; i < rowMax; i++) {
        for (let j = 0; j < colMax; j++) {
                 if (markerMatrix[i][j] === "unvisited") {
                markerMatrix[i][j] = "visited"
                if (matrix[i][j] === 1) {
                    console.log("Something to expand")
                    expand(i, j)
                }
            }
            console.log("result", i, j, markerMatrix)
        }
    }

    function expand(i, j) {
        console.log("expanding", i, j)
        let queue = [[i, j]]
        while (queue.length > 0) {
            let currentLocation = queue.shift()
            let row = currentLocation[0]
            let col = currentLocation[1]
            // north
            if (row - 1 >=0 && markerMatrix[row - 1][col] ==="unvisited") { if(matrix[row - 1][col] === 1) {queue.push([row - 1, col])}; markerMatrix[row-1][col] = "visited";}; 
            if (row + 1 < rowMax && markerMatrix[row + 1][col] ==="unvisited") {if(matrix[row + 1][col] === 1) {queue.push([row + 1, col])}; markerMatrix[row + 1][col] = "visited";}; 
            if (col - 1 >=0 && markerMatrix[row][col -1] ==="unvisited") {if(matrix[row][col -1] === 1) {queue.push([row, col -1])}; markerMatrix[row][col -1] = "visited";}; 
            if (col + 1 < colMax  && markerMatrix[row][col+ 1] ==="unvisited") {if(matrix[row][col+ 1] === 1) {queue.push([row, col+ 1])}; markerMatrix[row][col+ 1] = "visited";}; 
            console.log("one round", markerMatrix)
        }
        console.log(markerMatrix)
        isLandCount++
    }

    return isLandCount
}



let matrix1 = [
    [0, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1  , 1, 0]
]

console.log(countIslands(matrix1))
