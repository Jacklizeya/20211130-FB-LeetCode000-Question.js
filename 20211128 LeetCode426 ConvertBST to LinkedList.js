/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if (!root) {return null}
    let sequence = []
    inOrderTraverse(root)

    console.log("line 19", sequence.length)
    let i = 0
    while (i < sequence.length -1 ) {
        sequence[i].right = sequence[i+1]
        sequence[i + 1].left = sequence[i]
        i++
    }

    sequence[sequence.length - 1].right = sequence[0]
    sequence[0].left = sequence[sequence.length - 1]


    return sequence[0]
    
    
    function inOrderTraverse(node) {
        if (!node) {return}
        inOrderTraverse(node.left)
        sequence.push(node)
        inOrderTraverse(node.right)
    }
    
};
