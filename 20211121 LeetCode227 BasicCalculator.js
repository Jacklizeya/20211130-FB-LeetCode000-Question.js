/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let cleanArray = []
    let temporary = ""
    // fix one, case 42, multi-digits number
    for (let char of s) {
        if (char !== " ") {
            if (char === "+" || char === "-" || char === "*" || char === "/") {cleanArray.push(parseInt(temporary)); temporary = ""; cleanArray.push(char)}
            else {temporary += char}
        }
    }
    cleanArray.push(parseInt(temporary))


    let stack = []
    // first round, save plus and minus but do the calculation for multiply and divide
    for (let i = 0; i < cleanArray.length; i++) {
        if (cleanArray[i] === "*") {stack[stack.length - 1] = stack[stack.length - 1 ] * cleanArray[i+1]; i++} 
        else if (cleanArray[i] === "/") {stack[stack.length - 1] = Math.floor( stack[stack.length - 1 ] / cleanArray[i+1]); i++} 
        else {stack.push(cleanArray[i])} 
    }


    let result = stack[0]
    for (let i = 1; i< stack.length; i++) {
        if (stack[i] === "+") {result = result + stack[i+1]; i++} 
        else if (stack[i] === "-") {result = result - stack[i+1]; i++} 
    }

    return result
};
