function queryOutput(N, Q, queries) {
  let initialState = Array(N).fill(false)
  let result = []

  for (let query of queries) {
    let method = query[0]
    let index = query[1] - 1
    if (method === 1) {
      initialState[index] = true
    } else {
      for (j = index; j < initialState.length; j++) {
        if (initialState[j] === true) {result.push(j + 1); break;}
      }
      if (j === initialState.length) {result.push(-1)}
    }
  }

  return result
}



console.log(queryOutput(5, 5, [[2, 3], [1, 2], [2, 1], [2, 3], [2, 2]]))
