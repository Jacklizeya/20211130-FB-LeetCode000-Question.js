/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    
    let missing = 0
    let stack = []
    for (let char of s) {
        if (char === "(") {stack.push("(")}
        else if (char ===")") {
            if (stack[stack.length - 1] === "(") {stack.pop()} else {
                missing++
            }
        }
    }

    return stack.length + missing

};

console.log(minAddToMakeValid(s = "())"))
console.log(minAddToMakeValid("((("))
console.log(minAddToMakeValid("()"))
console.log(minAddToMakeValid("()))(("))
