const reverseInplace = arr => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
};

const originalArray = [1, 2, 3, 4, 5];
console.log("Original Array:", originalArray); 

reverseInplace(originalArray);
console.log("Reversed Array:", originalArray);