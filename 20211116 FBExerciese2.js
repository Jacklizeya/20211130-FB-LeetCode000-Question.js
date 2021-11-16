function findSubArraiesIndex(array) {
  let output = []

  let allSum = 0
  for (let element of array) {
    allSum += element
  }

  for (let i =0; i < array.length; i++) {
    let sum = 0
    let otherSum = allSum - sum
    for (let j = i; j < array.length; j++) {
      console.log("i and j", i, j)
      sum += array[j]
      otherSum -= array[j]
      console.log("i and j", i, j, j - i + 1, array.length + i -j - 1, (sum / (j - i + 1)), otherSum / (array.length + i -j - 1))
      if ((j - i + 1) === array.length) { if (sum > 0){ output.push([i + 1, j + 1])}} 
      else if ((sum / (j - i + 1)) > otherSum / (array.length + i -j - 1)) {
        console.log("ready to push", [i + 1, j + 1])
        output.push([i + 1, j + 1])
      } 
    }
  }


  return output
}

console.log(findSubArraiesIndex([3, 4, 2]))
