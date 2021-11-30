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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    
    let array = []
    inOrderTraverse(root)
    let newRoot = binaryBuild(array) 
    return newRoot
 
    function inOrderTraverse(node) {
        console.log("In Order Traverse", node.val)
        if (node === null) {return}
        if (node.left) {inOrderTraverse(node.left)}
        array.push(node.val)
        if (node.right) {inOrderTraverse(node.right)}
    }
    
    function binaryBuild(array, leftPointer = 0, rightPointer = array.length -1) {
        if (leftPointer > rightPointer) {return null}
        if (leftPointer === rightPointer) {return new TreeNode(array[leftPointer])}
        let middleIndex = leftPointer + Math.floor((rightPointer - leftPointer)/2)
        let middleNode = new TreeNode(array[middleIndex])
        middleNode.left = binaryBuild(array, leftPointer, middleIndex - 1)
        middleNode.right = binaryBuild(array, middleIndex + 1, rightPointer)
        return middleNode
        
    }
    

};
