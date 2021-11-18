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
