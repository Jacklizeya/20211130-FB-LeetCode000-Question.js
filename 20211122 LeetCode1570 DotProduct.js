
class SparseVector {
    constructor(nums) {
        this.nums = nums
    }
    
    dotProduct(anotherVector) {
        // console.log("trying dot", anotherVector.nums.length)
        let sum = 0
        for (let i = 0; i < anotherVector.nums.length; i++) {
            // console.log(this.nums[i] , anotherVector.nums[i])
            sum += this.nums[i] * anotherVector.nums[i]
        }
        return sum
    }
}

// let nums1 = [0,1,0,0,2,0,0]
// let nums2 = [1,0,0,0,3,0,4]

// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);

// // console.log(ans)
