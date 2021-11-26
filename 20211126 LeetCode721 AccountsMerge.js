/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    // O of N, store in a hash map
    let storage = {} 
    for (let account of accounts) {
        let name = account[0]
        let emails = account.slice(1, account.length)
        if (!storage[name]) {storage[name] = [emails]}
        else {storage[name].push(emails)}
    }
    console.log("step 1 organize into hashmap", storage)
    let result = []
    // sort it N * LOGN * K
    for (let name in storage) {
        let nameRelatedArrays = storage[name]
        // sort each individual array
        nameRelatedArrays.forEach(nameRelatedArray => nameRelatedArray.sort())
        // sort arrays
        nameRelatedArrays.sort((a, b) => {return a[0].localeCompare(b[0])})
        // merge arrays
        mergeArrays(nameRelatedArrays)
        for (let mergedEmailArray of nameRelatedArrays) {
            let mergedEmailSet = new Set(mergedEmailArray)
            result.push([name, ...[...mergedEmailSet].sort()])
        }
    } 
    return result

    function mergeArrays(stringIntervals) {
        let result = []
        // let workingIntervals = [...stringIntervals[0]]
        // for (let i =1; i < stringIntervals.length; i++) {
        //     console.log("can we merge them?", i, workingIntervals, stringIntervals[i])
        //     if (canMerge(workingIntervals, stringIntervals[i])) {
        //         mergeInterval(workingIntervals, stringIntervals[i])
        //     } else {
        //         result.push(workingIntervals)
        //         workingIntervals = [...stringIntervals[i]]
        //     }
        // }
        // result.push(workingIntervals)
        for (let i = 0; i < stringIntervals.length - 1; i++) {
            for (let j = i + 1; j < stringIntervals.length; j++) {
                console.log("can we merge", i, j, stringIntervals[i], stringIntervals[j])
                if (canMerge(stringIntervals[i], stringIntervals[j])) {mergeInterval(stringIntervals[i], stringIntervals[j]); stringIntervals.splice(j, 1); i = 0; j = 0}
                console.log(stringIntervals)
            }
        }

        return result
    }

    function canMerge(array1, array2) {
        for (let email of array1) {
            if (array2.includes(email)) {return true}
        }
        return false
    }

    function mergeInterval(array1, array2) {
        let array1Copy = [...array1]
        while (array1.length > 0) {
            array1.pop()
        }
        for (let email of array1Copy) {
            if (!array1.includes(email)) {array1.push(email)}
        }
        for (let email of array2) {
            if (!array1.includes(email)) {array1.push(email)}
        }
    }
 };


//  console.log(accountsMerge(
//     [["Alex","Alex5@m.co","Alex4@m.co","Alex0@m.co"],
//     ["Ethan","Ethan3@m.co","Ethan3@m.co","Ethan0@m.co"],
//     ["Kevin","Kevin4@m.co","Kevin2@m.co","Kevin2@m.co"],
//     ["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe2@m.co"],
//     ["Gabe","Gabe3@m.co","Gabe4@m.co","Gabe2@m.co"]]
//  ))

 console.log(accountsMerge(
    [["David","David5@m.co","David8@m.co"],
    ["David","David1@m.co","David1@m.co","David8@m.co"],
    ["David","David0@m.co","David0@m.co","David5@m.co"]]
 ))



// Solution is getting faster, but not faster enough to deal with large data sets
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    // O of N, store in a hash map
    let storage = {} 
    for (let account of accounts) {
        let name = account[0]
        let emails = account.slice(1, account.length)
        if (!storage[name]) {storage[name] = [emails]}
        else {storage[name].push(emails)}
    }
    // console.log("step 1 organize into hashmap", storage)
    let result = []
    for (let name in storage) {
        let nameRelatedArrays = storage[name]
        mergeArrays(nameRelatedArrays)
        for (let mergedEmailArray of nameRelatedArrays) {
            let mergedEmailSet = new Set(mergedEmailArray)
            result.push([name, ...[...mergedEmailSet].sort()])
        }
    } 
    return result


    function mergeArrays(stringIntervals) {
        let result = []
        for (let i = 0; i < stringIntervals.length - 1; i++) {
            for (let j = i + 1; j < stringIntervals.length; j++) {
                if (canMerge(stringIntervals[i], stringIntervals[j])) { stringIntervals[i] = mergeInterval(stringIntervals[i], stringIntervals[j]); stringIntervals.splice(j, 1); i = 0; j = 0}
            }
        }
        return result
    }

    function canMerge(array1, array2) {
        let set1 = new Set(...array1)
        let set2 = new Set(...array2)
        for (let email of set1) {
            if (set2.has(email)) {return true}
        }
        return false
    }

    function mergeInterval(array1, array2) {
        // converting array to set so we can merge it faster
        // console.log("arrays", array1, array2)
        let set1 = new Set(array1)
        let set2 = new Set(array2)
        // console.log("sets", set1, set2)
        for (let element of set2) {
            if (!set1.has(element)) {set1.add(element)}
        }
        return [...set1]
    }
 };


//  console.log(accountsMerge(
//     [["Alex","Alex5@m.co","Alex4@m.co","Alex0@m.co"],
//     ["Ethan","Ethan3@m.co","Ethan3@m.co","Ethan0@m.co"],
//     ["Kevin","Kevin4@m.co","Kevin2@m.co","Kevin2@m.co"],
//     ["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe2@m.co"],
//     ["Gabe","Gabe3@m.co","Gabe4@m.co","Gabe2@m.co"]]
//  ))

 console.log(accountsMerge(
    [["David","David5@m.co","David8@m.co"],
    ["David","David1@m.co","David1@m.co","David8@m.co"],
    ["David","David0@m.co","David0@m.co","David5@m.co"]]
 ))

