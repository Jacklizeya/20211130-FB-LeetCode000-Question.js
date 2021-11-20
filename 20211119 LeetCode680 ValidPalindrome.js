/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0
    let right = s.length - 1
 
    if (isPalindrome(left, right, s)) {return true} else {
        while (left < right && s[left] === s[right]) {left++; right--}
        return isPalindrome(left + 1, right, s) || isPalindrome(left, right - 1, s) 
    }
};

function isPalindrome(i, j, string) {
    while (i < j) {
        if (string[i] !== string[j]) {return false} else {i++; j--}
    }
    return true
}

