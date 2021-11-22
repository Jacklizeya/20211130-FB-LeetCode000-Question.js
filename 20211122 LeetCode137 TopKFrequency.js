class Heap {
    constructor(inputArray, testfunction) {
        this.testfunction = testfunction
        this.heap = this.initialize(inputArray)
    }

    initialize(inputArray) {
        let lastParent = Math.floor((inputArray.length - 2)/2)
        for (let i = lastParent; i>=0; i--) {
            this.siftDown(i, inputArray)
        }
        return inputArray
    }

    siftDown(i, array) {
        while (2 * i + 1 < array.length) {
            // only one child
            if ( 2 * i + 2 >= array.length) {
                if (this.testfunction(array[2 * i + 1], array[i]) < 0) {
                    this.swap(i, 2 * i +1, array)
                    i = 2 * i + 1
                } else {break;}
            }
            // have two children
            else {
                if (this.testfunction(array[2 * i + 1], array[i]) < 0 && this.testfunction(array[2 * i + 1], array[2 * i + 2]) <=0) {
                    this.swap(i, 2 * i +1, array)
                    i = 2 * i + 1
                }
                else if (this.testfunction(array[2 * i + 2], array[i]) < 0 && this.testfunction(array[2 * i + 2], array[2 * i + 1]) <=0) {
                    this.swap(i, 2 * i + 2, array)
                    i = 2 * i + 2
                }
                else {break;}
            }
        }
    }

    bubbleUp(i, array) {
        while (i > 0) {
            if (this.testfunction(array[i], array[Math.floor((i - 1)/2)]) < 0) {
                this.swap(i, Math.floor((i - 1)/2), array)
                i = Math.floor((i - 1)/2)
            } else {break;}
        }
    }

    swap(i, j, array) {
        let temporary = array[i]
        array[i] = array[j]
        array[j] = temporary
    }

    pop() {
        this.swap(0, this.heap.length - 1, this.heap)
        this.heap.pop()
        this.siftDown(0, this.heap)
    }

    push(element) {
        this.heap.push(element)
        this.bubbleUp(this.heap.length - 1, this.heap)
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // convert to a hash map
    let frequencyHashMap = {}
    for (let num of nums) {
        if (frequencyHashMap[num]) {frequencyHashMap[num]++} 
        else {frequencyHashMap[num] = 1}
    }
    // console.log("frequencyHashMap", frequencyHashMap)
    // build the minHeap
    let frequencyArray = Object.values(frequencyHashMap)
    let minHeap = new Heap ([], function (a, b) {return a -b })
    for (let i = 0; i < frequencyArray.length; i++) {
        if (i < k) {minHeap.push(frequencyArray[i])}
        else {
            if (frequencyArray[i] > minHeap.heap[0]) { minHeap.pop(); minHeap.push(frequencyArray[i])}
        }
        // console.log("round", i, minHeap.heap)
    }
    // console.log(minHeap.heap)
    let result = []
    for (let key in frequencyHashMap) {
        if (frequencyHashMap[key] >= minHeap.heap[0]) {result.push(key)}
    }

    return result
};
