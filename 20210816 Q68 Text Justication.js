/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    
let output = []
let possibleLine = ""
for (let i=0; i< words.length; i++) {
    
    possibleLine = possibleLine + words[i] + " "
    if (possibleLine.length > maxWidth + 1) {
        // console.log("possibleLine", possibleLine, possibleLine.length)
        let proposedLine = possibleLine.trim().split(" ")
        proposedLine.pop()
        // console.log("New proposedLine", proposedLine)
        let proposedElement = convertArrayToString(proposedLine)
        output.push(proposedElement)
        // reset possibleLine and i--
        possibleLine = ""
        i--
    }
}

let lastLine = convertLastLine(possibleLine)
// console.log("Proposed last line", lastLine)
output.push(lastLine)
// The final result
// console.log("output", output)
return output

function convertLastLine(string) {
    let currentLength = string.length
    let extraSpace = maxWidth - currentLength
    return string + Array(extraSpace).fill(' ').join('')
}

function convertArrayToString(array) {
    if (array.length === 1) {
        let extraLength = maxWidth - array[0].length
        return array[0] + Array(extraLength).fill(' ').join('')
    }

    let string = array.join("")
    let currentLength = string.length
    let extraLength = maxWidth - currentLength
    let gapCount = array.length - 1
    let rightSpaceCount = Math.floor(extraLength/gapCount) 
    let leftSpaceCount = extraLength - (gapCount - 1) * rightSpaceCount
    let transformedString = ""
    for (let i=0; i< array.length; i++) {
        // console.log("round", i, array[i])
        if (i === 0) {transformedString += array[i] + Array(leftSpaceCount).fill(' ').join('')}
        if (i > 0 && i < array.length -1) {transformedString += array[i] + Array(rightSpaceCount).fill(' ').join('')}
        if (i === array.length - 1) {transformedString += array[i]}
        // console.log(transformedString.length)
    }
    return transformedString
}
    
};
