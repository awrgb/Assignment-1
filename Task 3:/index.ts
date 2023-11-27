// Scenario 1 - Modify Array with Methods
const initialArray: number[] = [1, 2, 3, 4, 5];
console.log("Initial Array:", initialArray);

initialArray.push(6, 7); // Add elements to the end
console.log("After push:", initialArray);

initialArray.pop(); // Remove the last element
console.log("After pop:", initialArray);

initialArray.shift(); // Remove the first element
console.log("After shift:", initialArray);

initialArray.unshift(0); // Add elements to the beginning
console.log("After unshift:", initialArray);

// Scenario 2 - Subarray Creation
const originalArray: number[] = [10, 20, 30, 40, 50];
console.log("Original Array:", originalArray);

// Create a subarray using splice
const splicedArray: number[] = originalArray.splice(1, 3);
console.log("Subarray using splice:", splicedArray);
console.log("Original Array after splice:", originalArray);

// Create a subarray using slice
const slicedArray: number[] = originalArray.slice(1, 3);
console.log("Subarray using slice:", slicedArray);
console.log("Original Array after slice:", originalArray);
