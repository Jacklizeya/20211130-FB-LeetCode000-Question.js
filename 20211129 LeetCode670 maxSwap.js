/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let numAsArray = num.toString().split("")
    let hashmap = {}
    for (let char of numAsArray) {
        if (hashmap[char]) {hashmap[char]++} else {hashmap[char] = 1 }
    }

    let max = ""
    for (let key of "9876543210") {
        let keycount = hashmap[key]
        if (keycount) {
            while (keycount > 0) {
                max += key
                keycount--
            }
        }
    }

    for (let i= 0; i < numAsArray.length; i++) {
        // found something interesting
        if (numAsArray[i] !== max[i]) {
            let target = max[i]    
            for (let targetIndex = numAsArray.length - 1; targetIndex >= 0; targetIndex--) {
                if (numAsArray[targetIndex] === target) {
                    let temporary = numAsArray[i]
                    numAsArray[i] = max[i]
                    numAsArray[targetIndex] = temporary
                    return parseInt(numAsArray.join(""))
                }
            } 
        }
    }
    return num
};
console.log(maximumSwap(1993))
console.log(maximumSwap(2736))
