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
 */
class BSTIterator {
    constructor(root) {
        this.array = [-Infinity]
        this.inOrderTraverse(root) 
        this.pointer = 0

    }

    next () {
        if (this.hasNext()) {
            this.pointer++
            return this.array[this.pointer]
        } 
    }

    hasNext() {
        if (this.pointer < this.array.length - 1) {return true} else {return false}
    }

    
    inOrderTraverse(node) {
            if (!node) {return}
            if (node.left) {this.inOrderTraverse(node.left)}
            this.array.push(node.val)
            if (node.right) {this.inOrderTraverse(node.right)}
    }
}
