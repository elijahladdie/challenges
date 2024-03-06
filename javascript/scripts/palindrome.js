const isPalindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};
console.log(isPalindrome("ele"),"1")
console.log(isPalindrome("Kuradusenge"),"2")