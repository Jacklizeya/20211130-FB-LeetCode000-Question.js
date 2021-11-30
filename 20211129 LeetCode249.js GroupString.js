/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    let stringTrends = strings.map(string => {
        return findPattern(string)
    })

    let trendAndStringsMap = {}
    for(let i = 0; i < stringTrends.length; i++) {
        let stringTrend = stringTrends[i]
        let string = strings[i]
        if (!trendAndStringsMap[stringTrend]) {trendAndStringsMap[stringTrend] = [string]} else {
            trendAndStringsMap[stringTrend].push(string)
        }
    }

    return Object.values(trendAndStringsMap)
};

function findPattern(string) {
    let dictionary = "abcdefghijklmnopqrstuvwxyz"
    let pattern = ""
    for (let i = 1; i < string.length; i++) {
        let distance = dictionary.indexOf(string[i]) - dictionary.indexOf(string[i -1])
        if (distance < 0) {distance += 26}
        pattern = pattern + distance + "/"
    }
    return pattern
}
