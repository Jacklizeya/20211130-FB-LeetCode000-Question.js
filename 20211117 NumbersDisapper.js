/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = []

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i + 1) {
            if (nums[i] === nums[nums[i] - 1]) {break;}
            swap(i, nums[i] - 1, nums)
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (i + 1 !== nums[i]) {result.push(i + 1)}
    }

    console.log(nums)
    return result
};


function swap(i, j, nums) {
    let temporary = nums[i]
    nums[i] = nums[j]
    nums[j] = temporary
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
