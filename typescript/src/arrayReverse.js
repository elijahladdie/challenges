"use strict";
const reverseArray = (arr) => arr.slice().reverse();
const reversed = (arr) => {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
};
