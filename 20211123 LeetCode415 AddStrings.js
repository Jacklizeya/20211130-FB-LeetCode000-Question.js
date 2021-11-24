/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let longerLength = Math.max(num1.length, num2.length)
    let carryToHigherDigit = 0
    let result = ""
    for (let i = 0; i < longerLength; i++) {
        let leftNum = num1[num1.length - 1 - i]? parseInt(num1[num1.length -1  - i]) : 0
        let rightNum = num2[num2.length - 1  - i]? parseInt(num2[num2.length - 1 - i]) : 0
        let combineNum = leftNum + rightNum + carryToHigherDigit

        if (combineNum >=10) {combineNum = combineNum % 10; carryToHigherDigit = 1} else {carryToHigherDigit = 0}
        result = combineNum + result
    }
    if (carryToHigherDigit === 1) {return 1 + result} else {return result}
    
};
