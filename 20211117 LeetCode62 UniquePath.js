/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    let count = 0
    expand(0, 0)
    return count



    function expand(i, j) {
        if (i === m -1 && j === n- 1) {count++; return}
        if (i + 1 < m) {expand(i+1, j)}
        if (j+1 < n) {expand(i, j+1)}
    }
};



// Upgrade with Dynamic Programming M* N

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {

    let matrix = []
    matrix.push(Array(n).fill(1))
    
    for (let row  = 1; row < m; row++) {
        matrix.push([1])
        for (let col = 1; col < n; col++) {
           matrix[row].push(matrix[row - 1][col] + matrix[row][col -1])
        }
    }

    console.log(matrix)
    return matrix[m-1][n-1]

};

console.log(uniquePaths(3, 7))
