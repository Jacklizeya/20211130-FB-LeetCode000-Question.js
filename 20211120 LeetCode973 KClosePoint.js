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
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distanceArray = points.map(point => point[0] * point[0] + point[1] * point[1])
    let kthSmallestNumber = find_Kth_smallest_number(distanceArray, k)
    return points.filter(point => point[0] * point[0] + point[1] * point[1] <= kthSmallestNumber)
};


var find_Kth_smallest_number = function(nums, k) {
    let maxHeap = new Heap( [] , function (a, b) {return b-a})
    for (let i =0 ; i < nums.length; i++) {
        if (i < k) {maxHeap.push(nums[i])} else {
            if (nums[i] < maxHeap.heap[0]) {maxHeap.pop(); maxHeap.push(nums[i])}
        }
    }
    return maxHeap.heap[0]
};
