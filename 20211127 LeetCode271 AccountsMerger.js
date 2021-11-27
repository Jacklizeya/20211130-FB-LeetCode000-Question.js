var accountsMerge = function(accounts) {
    let emailToNameMap = {}
    let graphNodeAdjacentList = {}
    for (let account of accounts) {
        // Pick Start Model to build graph, make sure there is double connection between heart and leaves
        // Advanced destruction technique
        let [emailRelatedName, firstEmailNode, ...otherEmailNodes] = account
        emailToNameMap[firstEmailNode]  = emailRelatedName
        
        graphNodeAdjacentList[firstEmailNode] = graphNodeAdjacentList[firstEmailNode] ? graphNodeAdjacentList[firstEmailNode] : new Set()
        for (let otherEmailNode of otherEmailNodes) {
            graphNodeAdjacentList[firstEmailNode].add(otherEmailNode)
            graphNodeAdjacentList[otherEmailNode] = graphNodeAdjacentList[otherEmailNode] ? graphNodeAdjacentList[otherEmailNode] : new Set()
            graphNodeAdjacentList[otherEmailNode].add(firstEmailNode)
            emailToNameMap[otherEmailNode]  = emailRelatedName
        }
    }

    console.log("adjacent list", graphNodeAdjacentList)
    // After graph is build, we can do our traverse
    let result = []
    let visited = new Set()
    Object.keys(graphNodeAdjacentList).forEach(email => {
        if (!visited.has(email)) {
            // console.log("Email* ***", email)
            visited.add(email)
            let queue = [email]
            let cumulativeStack = [email]
            while (queue.length > 0) {
                // console.log("current queue", queue)
                currentNode = queue.shift() 
                let adjacentNodes = graphNodeAdjacentList[currentNode]
                for (let adjacentNode of adjacentNodes) {
                    if (!visited.has(adjacentNode)) {
                        visited.add(adjacentNode)
                        queue.push(adjacentNode)
                        cumulativeStack.push(adjacentNode)
                    }
                }
            }
            result.push([emailToNameMap[email], ...cumulativeStack.sort()])
        }
    })
    return result
}


// console.log("fianl Result" , 
// accountsMerge(
// [["Alex","Alex0@m.co","Alex4@m.co","Alex5@m.co"],
// ["Ethan","Ethan0@m.co","Ethan3@m.co"],
// ["Gabe","Gabe0@m.co","Gabe2@m.co","Gabe3@m.co","Gabe4@m.co"],
// ["Kevin","Kevin2@m.co","Kevin4@m.co"]]
// )
// )
