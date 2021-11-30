/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
var maxLength = function(ribbons, k) {
    
    // There is no straight forward solution, we have try different cutting all the way to find it
    // step 1: sort it first and find the maximum possible
    ribbons.sort((a, b) => {return b -a})
    // step 2: the length can range through 0 to maxSingleRibbon [0, 1,2, 3, 4, 5, 6, ..., max], we need to find something doable
    let result 
    let possibleShortestLength = 0
    let possibleLongestLength = ribbons[0]
    while (possibleShortestLength <= possibleLongestLength) {
        // console.log("the range", possibleShortestLength, possibleLongestLength)
        let possibleMiddleLength = Math.floor((possibleShortestLength + possibleLongestLength)/2)
        if (cuttingIsDoable(possibleMiddleLength)) {
            result = possibleMiddleLength
            // console.log("possibleone", result)
            possibleShortestLength = possibleMiddleLength + 1
        } else {
            possibleLongestLength = possibleMiddleLength - 1
        }
    }
    return result
    // Helper function, verify the proposedLength one by one
    function cuttingIsDoable(proposedLength) {
        // console.log("helper function", proposedLength)
        let cutsToBeDone = k
        for (let ribbon of ribbons) {
            // console.log("current ribbons", ribbon)
            let maxContributionCut = Math.floor(ribbon/proposedLength)
            cutsToBeDone -= maxContributionCut
        }
        // console.log("cutsToBeDone", cutsToBeDone)
        if (cutsToBeDone <=0 ) {return true} else {return false}
    }

};

// console.log(maxLength(ribbons = [9,7,5], k = 3))
// console.log(maxLength(ribbons = [7,5,9], k = 4))
// console.log(maxLength([5,7,9], k = 22))
