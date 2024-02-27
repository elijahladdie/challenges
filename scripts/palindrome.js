const isPalindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};
console.log(isPalindrome("ele"))
console.log(isPalindrome("Kuradusenge"))