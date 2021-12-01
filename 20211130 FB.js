Q1

Finding Average of a sliding window of 3
We only need to have a rightPointer, as leftPointer = rightPointer - 3


Q2

Two pointers based on the assumption all numbers are integer: continuous sum problem
There is some hard Logic here

// constrain is it could be just one, and all numbers are positive

function check(array, target) {
    let leftPointer = 0
    let rightPointer = 0
    let sum = array[0]

    while (rightPointer < array.length) {
        console.log("sum", sum)
        if (sum === target) {return true}
        else if (sum < target) {rightPointer++ ; sum += array[rightPointer]}
        else {
          if (leftPointer < rightPointer) { sum -= array[leftPointer]; leftPointer++}
        //   if (leftPointer === rightPointer && rightPointer === array.length - 1) {return false}
          else {rightPointer++ ; sum += array[rightPointer]} 
        }
    }

return false
}

console.log(check([1, 2, 11, 4, 10], 10))
