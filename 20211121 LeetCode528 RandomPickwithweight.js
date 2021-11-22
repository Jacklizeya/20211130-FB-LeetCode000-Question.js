class Solution {
    constructor(w) {
        let sumArray = []
        let sum = 0
        for (let weight of w) {
            sum = sum + weight
            sumArray.push(sum)
        }
        this.sum = sum
        this.sumArray = sumArray
    }
    
    pickIndex() {
        let randomNumber = Math.floor(Math.random() * this.sum)
        for (let i = 0; i < this.sumArray.length; i++) {
            if (this.sumArray[i] > randomNumber) {return i}
        }
    }
}
