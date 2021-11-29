/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    
    let storage = {}
    let indexStack = []
    let actionStack = []
    let previousTime = 0
    
    for (let log of logs) {
        let logArray = log.split(":")
        let currentIndex = parseInt(logArray[0])
        let currentAction = logArray[1]
        let currentTimeStamp =  (currentAction === "start")? parseInt(logArray[2]) : (parseInt(logArray[2]) + 1)

        if (!storage[currentIndex]) {storage[currentIndex] = 0}
        // no matter what, the one on the top of stack will add more time
        let timeGap = currentTimeStamp - previousTime
        previousTime = currentTimeStamp
        if (indexStack.length > 0) {storage[indexStack[indexStack.length - 1]] += timeGap}

        if (currentAction === "end" && actionStack[actionStack.length - 1] ==="start" && currentIndex === indexStack[indexStack.length - 1]) {
            indexStack.pop()
            actionStack.pop()
        } else {
            indexStack.push(currentIndex)
            actionStack.push(currentAction)
        }
    }

    return Object.values(storage)
};
