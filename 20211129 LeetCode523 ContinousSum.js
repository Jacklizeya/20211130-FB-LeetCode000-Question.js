/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let length = nums.length
    let leftPointer = 0


    while (leftPointer < length - 1) {
        let sum = nums[leftPointer]
        rightPointer = leftPointer + 1
      
        while (rightPointer < length) {
            sum += nums[rightPointer]
            if (sum % k ===0 ) {return true}    
            rightPointer++
        }

        leftPointer++
    }

    return false
};



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    
    
   
    let hashmap = {}
    hashmap[0] = -1
    let cumulativeSum = 0
    
    for (let i = 0; i < nums.length; i++) {
        cumulativeSum = cumulativeSum + nums[i]
        cumulativeSum = cumulativeSum % k
        if (hashmap[cumulativeSum] === undefined)  {hashmap[cumulativeSum] = i} else {
            if (i - hashmap[cumulativeSum] > 1) {return true}}     
    }

    return false
};
