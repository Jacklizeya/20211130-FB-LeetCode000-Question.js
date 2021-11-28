/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let numberStringArray = numberArray.map(element => element.toString())
    let numberSet = new Set(numberStringArray)
    // console.log(numberSet)
    let wordIndex = 0
    let abbrIndex = 0
    while (wordIndex < word.length && abbrIndex < abbr.length) {
        // console.log("line 14", wordIndex, abbrIndex)
        // if it is string
        if (!numberSet.has(abbr[abbrIndex])) {
            // console.log("it is a string")
            if (word[wordIndex] !== abbr[abbrIndex]) {return false} else {wordIndex++; abbrIndex++}
        } else {
            // console.log("it is a number")
            let numberStart = abbrIndex
            if (abbr[numberStart] === "0") {return false}
            while (numberSet.has(abbr[numberStart])) {
                numberStart++
            }
            // console.log("stopping point of numberStart", numberStart)
            let number = parseInt(abbr.substring(abbrIndex, numberStart))
            // console.log("number", number)
            
            wordIndex = wordIndex + number
            abbrIndex = numberStart
        }

    }
    if (!(wordIndex === word.length && abbrIndex === abbr.length)) {return false}
    return true
};
