/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    // base case 
    if (n === 0) {return 1}

    
    let absn = Math.abs(n)
    result = (absn % 2 === 0 ?  myPow(x * x, absn / 2) : myPow( x * x , Math.floor(absn / 2)) * x  )
    return (n > 0 ? result : 1/ result )
};

// console.log(myPow(2, -3))
