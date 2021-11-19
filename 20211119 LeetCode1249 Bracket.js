/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let bracketStack = []
    let indexStack  = []
    
    for (let i =0; i < s.length; i++) {
        let char = s[i];
        if (char === "(") {bracketStack.push("("); indexStack.push(i)} else if (char === ")") {
            if (bracketStack[bracketStack.length - 1] === "(") {
                bracketStack.pop()
                indexStack.pop()
            } else {bracketStack.push(")"); indexStack.push(i)}
        }
    }
    // console.log("indexStack", indexStack)
    // whatever can not be cancelled will not be added
    let result  = ""
    for (let j = 0; j < s.length; j++) {
        if (!indexStack.includes(j)) {result += s[j]}
        // console.log(j, "result", result)
    }

    return result
  };


// Faster way of doing things:
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let leftBracketStack = []
    let indexToRemoveObject  = {}
    let result = ""
    
    for (let i =0; i < s.length; i++) {
        let char = s[i];
        if (char === "(") {leftBracketStack.push(i);} 
        else if (char === ")") {
            if (leftBracketStack.length === 0) { indexToRemoveObject[i] = "toBeRemove"}
            else {leftBracketStack.pop()}
        }
    }
    
    
    while (leftBracketStack.length > 0) {
        indexToRemoveObject[leftBracketStack.pop()] = "toBeRemove"
    }

    for (let j = 0; j < s.length; j++) {
        if (!(j in indexToRemoveObject)) {result += s[j]}
        // console.log(j, "result", result)
    }

    return result
  };
