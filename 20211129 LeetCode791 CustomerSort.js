/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    
    let charCount = {}

    for (let char of s) {
        if (!charCount[char]) {charCount[char] = 1} else {charCount[char] ++}
    }

    let string = ""
    // add what is in the order
    for (let char of order) {
        let count = charCount[char]
        if (count) {while (count > 0) {
            string += char
            count--
        }} 
        delete charCount[char]
    }
    // add what is not in the order
    for (let key in charCount) {
        let count = charCount[key]
        if (count) {
            while (count > 0) {
            string += key
            count-- }
        }
    }

    return string
};
