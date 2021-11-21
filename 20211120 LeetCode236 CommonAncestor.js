/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // Build the tree
    let Nodes = root.map((val) => { if (val === null) { return null } else { return new treeNode(val) } })
    for (let i = 0; i < root.length; i++) {
        if (Nodes[2 * i + 1] !== undefined) { Nodes[i].left = Nodes[2 * i + 1] } else { if (Nodes[i]) { Nodes[i].left = null } }
        if (Nodes[2 * i + 2] !== undefined) { Nodes[i].right = Nodes[2 * i + 2] } else { if (Nodes[i]) { Nodes[i].right = null } }
    }
    // Find the path
    let pathP = findThePathToNode(Nodes[0], p)
    let pathQ = findThePathToNode(Nodes[0], q)
    // find the common ground
    let i = 0
    while (pathP[i] === pathQ[i]) {
        i++
    }
    return pathP[i - 1]
};

function findThePathToNode(root, node) {
    let status = "notfound"
    let result = "empty"
    DFS(root, node)
    return result

    function DFS(root, node, path = []) {
        if (status === "found") { return }
        path.push(root.val)

        if (root.val === node) { result = [...path]; status = "found"; return }
        if (root.left === null && root.right === null) { }
        else if (root.left !== null && root.right === null) { DFS(root.right, node, path) }
        else if (root.left === null && root.right !== null) { DFS(root.left, node, path) }
        else { DFS(root.left, node, path); DFS(root.right, node, path) }

        path.pop()

    }
}

class treeNode {
    constructor(val) {
        this.left = null
        this.right = null
        this.val = val
    }
}

console.log(lowestCommonAncestor([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1))
