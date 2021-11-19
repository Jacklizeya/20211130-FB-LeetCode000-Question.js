/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    let cumulativeSum = 0
    // the starting point of cumulative sum
    let storage = { 0 : 1}
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        cumulativeSum = cumulativeSum + nums[i]
        
        count += storage[cumulativeSum - k]? storage[cumulativeSum - k] : 0
        
        if (!storage[cumulativeSum]) {storage[cumulativeSum] = 1} else {storage[cumulativeSum]++}


    }


    return count
};

