/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // negative numbers are not palindrome
    // numbers ending in 0 cannot be palindrome except 0 itself
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversedHalf = 0;

    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // even digits: x === reversedHalf
    // odd digits:  x === Math.floor(reversedHalf / 10)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};