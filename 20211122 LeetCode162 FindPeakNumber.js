/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        console.log("round", left, right, left + Math.floor((right - left)/2) )
        let middle = left + Math.floor((right - left)/2)
        // console.log("check", (nums[middle] > nums[middle - 1] , middle - 1 === 0) && (nums[middle] > nums[middle + 1] || middle + 1 === nums.length))
        if ((nums[middle] > nums[middle - 1] || middle - 1 === -1) && (nums[middle] > nums[middle + 1] || middle + 1 === nums.length)) {return middle}
        else if ((nums[middle] > nums[middle - 1] || middle - 1 === -1) && (nums[middle] < nums[middle + 1])) {left = middle + 1}
        else if ((nums[middle] < nums[middle - 1]) && (nums[middle] > nums[middle + 1] || middle + 1 === nums.length)) {right = middle - 1}
        else {left = middle + 1}
    }  
    return left 
};
