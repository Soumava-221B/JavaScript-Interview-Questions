// JavaScript Program to find Intersection of Unsorted Arrays

// Intersection (filter method)
function findIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

const arr1 = [3, 1, 5, 2];
const arr2 = [5, 2, 7];
console.log(findIntersection(arr1, arr2));

// Set() method
// function findIntersection(arr1, arr2) {
//     const set = new Set(arr1);
//     return arr2.filter(item => set.has(item));
// }

// // Example Usage
// const arr1 = [3, 1, 5, 2];
// const arr2 = [5, 2, 7];
// console.log(findIntersection(arr1, arr2)); // Output: [5, 2]