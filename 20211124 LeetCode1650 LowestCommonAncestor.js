/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    let path = new Set()
    
    let currentNode = p
    let storage = {}
    while (currentNode !== null) {
        path.add(currentNode)
        currentNode = currentNode.parent
    }
    
    currentNode = q
    while (currentNode !== null) {
        if (path.has(currentNode)) {return currentNode}
        currentNode = currentNode.parent
    }
};
