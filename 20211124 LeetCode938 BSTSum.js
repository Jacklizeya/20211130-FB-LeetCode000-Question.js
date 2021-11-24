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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0
    let queue = [root]
    while (queue.length > 0) {
        let levelLength = queue.length
        for (let i=0; i < levelLength; i++) {
            let currentNode = queue.shift()
            if (currentNode.val <= high && currentNode.val >= low) {sum += currentNode.val}
            if (currentNode.left && low <= currentNode.val) {queue.push(currentNode.left)}
            if (currentNode.right && high >= currentNode.val) {queue.push(currentNode.right)} 
        }
    }
    
    return sum
};
