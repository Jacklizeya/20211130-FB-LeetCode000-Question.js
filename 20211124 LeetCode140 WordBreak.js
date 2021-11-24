/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let finalIndex = s.length
    let result = []

    let storage = {}
    // build a hashmap store possible brick
    for (let char of wordDict) {
       let startingCharacter = char[0]
       if (startingCharacter in storage) {storage[startingCharacter].push(char)}
       else {storage[startingCharacter] = [char]}
    }

    graphTraverse(0, [])

    return result

    function graphTraverse(currentLocation = 0, path = []) {
       
        if (currentLocation > finalIndex) {return}
        if (currentLocation === finalIndex) {result.push(path.join(" ")); return}
        
        let possiblePaths = storage[s[currentLocation]]
       
        if (possiblePaths) {
                let qualifiedPath =  possiblePaths.filter(possiblePath => possiblePath === s.substring(currentLocation, currentLocation + possiblePath.length))
                if (qualifiedPath.length > 0) {
                    qualifiedPath.forEach((possiblePath)=>{
                        let newPath = [...path]
                        newPath.push(possiblePath)
                        graphTraverse(currentLocation + possiblePath.length, newPath)
                    })
                } else {return}
        } else {return}    
    }

};

console.log(wordBreak(s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]))
console.log(wordBreak(s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]))
console.log(wordBreak( s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]))
