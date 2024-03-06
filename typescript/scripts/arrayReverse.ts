// Method One
const reverseArray = <T>(arr: T[]): T[] => arr.slice().reverse();

// Method Two
const reversed = <T>(arr: T[]): T[] => {
    let result: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
};
