function countIslands(matrix) {
    let islandsCount = 0
    let markerMatrix = []
    let maxRow = matrix.length
    let maxCol = matrix[0].length

    for (let i = 0; i < maxRow; i++) {
        markerMatrix.push([])
        for (let j = 0; j < maxCol; j++) {
            markerMatrix[i].push("nonChecked")
        }
    }
    // start scanning
    for (let i = 0; i < maxRow; i++) {
        for (let j = 0; j < maxCol; j++) {

            if (markerMatrix[i][j] === "nonChecked") {
            markerMatrix[i][j] = "checked"
            if (matrix[i][j] === 1) {
                // expand to maximum distance it can be
                expand(i, j)
            }}
        }
    }



    return islandsCount

    function expand(i, j) {
        let queue = [[i, j]]
        while (queue.length > 0) {
            let currentLocation = queue.shift()
            i= currentLocation[0]
            j = currentLocation[1]
            // if it is within boundary and has never been visited, then you need to do something. Otherwise, do not do anything
            if (i - 1 >=0 && markerMatrix[i-1][j] === "nonChecked") { markerMatrix[i-1][j] = "checked" ; if (matrix[i -1][j] === 1 ) {queue.push([i-1, j])}}
            if (i + 1 < maxRow && markerMatrix[i+1][j] === "nonChecked") { markerMatrix[i+1][j] = "checked" ; if (matrix[i + 1][j] === 1 ) {queue.push([i + 1, j])}}
            if (j - 1 >=0 && markerMatrix[i][j -1] === "nonChecked") { markerMatrix[i ][j - 1] = "checked" ; if (matrix[i ][j - 1] === 1 ) {queue.push([i, j - 1])}}
            if (j + 1 < maxCol && markerMatrix[i][j + 1] === "nonChecked") { markerMatrix[i][j + 1] = "checked" ; if (matrix[i][j+ 1] === 1 ) {queue.push([i, j + 1])}}
        }
        islandsCount++
}
}


let matrix1 = [
    [0, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 1  , 1, 0]
]

console.log(countIslands(matrix1))
