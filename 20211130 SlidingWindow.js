Q1

Finding Average of a sliding window of 3
We only need to have a rightPointer, as leftPointer = rightPointer - 3


Q2

Two pointers based on the assumption all numbers are integer: continuous sum problem


while (rightPointer < length) {
if (sum === target) {return true}
else if (sum < target) {rightPointer++ ; sum += array[rightPointer]}
else {
  if (leftPointer < rightPointer) { sum -= array[leftPointer]; leftPointer++}
  else {rightPointer++ ; sum += array[rightPointer]} 
}
}
