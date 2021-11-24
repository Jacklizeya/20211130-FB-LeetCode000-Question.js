/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanString = ""
    for (let char of s) {
        if ("abcdefghijklmnopqrstuvwxyz".includes(char) || "0123456789".includes(char)) {cleanString += char}
        else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(char)) {cleanString += char.toLowerCase()}
    }
    // console.log(cleanString)
    for (let i = 0; i < Math.floor((cleanString.length + 1) /  2)  ; i++) {
        // console.log(`round${i}`, cleanString[i], cleanString[cleanString.length - i])
        if (cleanString[i] !== cleanString[cleanString.length - 1 - i]) {return false} 
    }
    return true
};
