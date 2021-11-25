/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    
    let infoInArray = []
    DFT(0, 0, root)
    infoInArray.sort((a, b) => {return (a[0] - b[0] || a[1] - b[1] || a[2] - b[2])})
    // console.log("infoInArray", infoInArray)
    let storage = {}
    for (let element of infoInArray) {
        let column = element[0]
        if (storage[column]) {storage[column].push(element[2])} else {storage[column] = [element[2]]}
    }
    // console.log("storage", storage)
    let keys = Object.keys(storage).sort((a, b) => {return a -b})
    console.log("keys", keys)
    let result = []
    for (let key of keys) {
        // console.log("key", key)
        result.push(storage[key])
    }
    
    return result
    
    
    function DFT(column, row, node) {
        if (node) {
        DFT(column - 1, row + 1, node.left)
        infoInArray.push([column, row, node.val])
        DFT(column + 1, row + 1, node.right)
    }
    }
};
