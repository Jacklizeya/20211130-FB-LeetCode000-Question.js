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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    
    assignAndReturnHeight (root)
    let maxDiameter = -Infinity
    traverseAndFindDiamter(root)
    return maxDiameter  
    
    function assignAndReturnHeight(node) {
        if (node.left === null && node.right === null) { node.radius = 1;}
        else if (node.left !== null && node.right === null) {node.radius = assignAndReturnHeight(node.left) + 1;}     
        else if (node.left === null && node.right !== null) {node.radius = assignAndReturnHeight(node.right) + 1;}
        else {node.radius = Math.max(assignAndReturnHeight(node.left), assignAndReturnHeight(node.right))  + 1;}
        return node.radius
    }
    
    
    function traverseAndFindDiamter(node) {
        if (node.left === null && node.right === null) { node.diameter = 0;}
        else if (node.left !== null && node.right === null) {node.diameter = node.left.radius; traverseAndFindDiamter(node.left)}     
        else if (node.left === null && node.right !== null) {node.diameter = node.right.radius; traverseAndFindDiamter(node.right)}
        else {node.diameter = node.left.radius + node.right.radius; traverseAndFindDiamter(node.left), traverseAndFindDiamter(node.right)}
        maxDiameter = Math.max(node.diameter, maxDiameter)
    }
};
