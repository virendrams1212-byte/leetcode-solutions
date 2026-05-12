/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    if(str.split("").reverse().join("") === str)
    return true;
    else
    return false;
};