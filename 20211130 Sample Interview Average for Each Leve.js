function sumAtEachLevel(root) {

    let result = []

    let queue = [root]
    let sum = root.value

    while (root.length > 0) {
        let levelLength = queue.length
        result.push(sum/levelLength)
        for (let i =0; i < levelLength; i++ ) {
            let currentNode = queue.shift()
            sum -= currentNode.value
            if (currentNode.left) {queue.push(current.left); sum+= current.left.value}
            if (currentNode.right) {queue.push(current.right); sum+= current.left.value}
        }
    }
    return result
}
