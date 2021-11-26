let array = ["a", "b", "c"]

// function addmore(input) {
//     input.push("d")
//     input.push("e")
// }
// addmore(array)
// console.log(array)
// // result is [ 'a', 'b', 'c', 'd', 'e' ]


function addmore(input) {
        input = []
        input.push("a")
        input.push("b")
        input.push("c")
        input.push("d")
        input.push("e")
    }
    addmore(array)
    console.log(array)
    // result is [ 'a', 'b', 'c']

    // reason:
 `
 The function call addmore(array) is like 
 step1: assign value of array to input: let input = array
 step2: dosomething
 case1: they are sharing the same reference
 case2: input got reassigned, so the connection breaks
 `
