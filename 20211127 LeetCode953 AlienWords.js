/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for (let i = 0; i < words.length - 1; i++) {
        if (formerIsBigger(words[i], words[i + 1])) {}
        else {return false}
    }
    return true
    
    function formerIsBigger(string1, string2) {
        let commonLength = Math.min(string1.length, string2.length)
        for (let i =0; i < commonLength; i++) {
            if (order.indexOf(string1[i]) < order.indexOf(string2[i])) {return true}
            else if (order.indexOf(string1[i]) > order.indexOf(string2[i])) {return false}
        }
        if (string1.length <= string2.length) {return true} else {return false}
    }
    
};
