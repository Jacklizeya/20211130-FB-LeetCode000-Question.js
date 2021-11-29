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
