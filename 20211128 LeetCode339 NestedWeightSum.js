/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
    let result  = 0 
    dfs(nestedList) 
    return result

    function dfs(input, level = 1) {
        console.log("input and level", input, level)
        if ((typeof input) === "number") {result +=( input * (level - 1)); return}
        input.forEach(element => dfs(element, level+ 1))
    }
};
