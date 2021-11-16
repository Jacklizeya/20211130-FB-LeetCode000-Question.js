function reOrganizeArray(array) {
    let zeroPointer = array.length - 1
    while(array[zeroPointer] === 0) {zeroPointer--}

   let i = 0
   while (i < zeroPointer)  {
        if (array[i] === 0) {swap(i, zeroPointer, array); zeroPointer--; while(array[zeroPointer] === 0) {zeroPointer--}}
        i++
    }

    return array
} 


function swap(i, j, array) {
    let temporary = array[i]
    array[i] = array[j]
    array[j] = temporary 
} 

console.log(reOrganizeArray([1,2, 5,6,7,8,5,2,0,0,0,0,52,5,55,5,5,2,5,5,2,-1,2,5,10]))
