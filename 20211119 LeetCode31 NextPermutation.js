/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
    let i = nums.length -1; 
    while (i-1 >=0 && nums[i-1] >= nums[i]) {
        i--
    }
    // if it is all the way going up, i will reach 0, then a simple reverse will solve it
    // otherwise, i will stay at 1, you will need to do some swap

    if (i >= 1) {

        let j = i

        while (j <= nums.length -1 && nums[j] > nums[i-1] ) {

        j++
        }

        let target = j - 1

        swap(i - 1, target, nums)

    }
    
    
    reverse(i, nums)
    
    return nums
};


function swap(i, j, nums) {
    let temporary = nums[i]
    nums[i] = nums[j]
    nums[j] = temporary
}

function reverse(i, nums) {
    let left = i
    let right = nums.length - 1
    
    while (left < right) {
        swap(left, right, nums)
        left++
        right--
    }
    
    
    
}

