class Node {
    constructor(value, next, random) {
        this.value = value
        this.next = (next ? next : null)
        this.random = (random? random : null)
    }
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let hashmap = {}

    let node = head
    while (node !== null) {
        hashmap[node] = new Node(node.value, null, null)
        node = node.next
    }

    node = head
    while (node !== null) {
        hashmap[node].next = hashmap[node.next]
        hashmap[node].random = hashmap[node.random]
        node = node.next
    }

    return hashmap[head]
};
