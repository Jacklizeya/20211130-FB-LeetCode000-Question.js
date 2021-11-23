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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) {return []}
    
    let result = []
    let queue = [root]
    while (queue.length > 0) {
        // console.log("queue", queue)
        let levelLength = queue.length
        for (let i = 0; i < levelLength; i++) {
            let currentNode = queue.shift()
            if (currentNode?.left) {queue.push(currentNode.left)}
            if (currentNode?.right) {queue.push(currentNode.right)}
            if (i === levelLength - 1) {result.push(currentNode?.val)}
        }
    }
    
    return result
};
