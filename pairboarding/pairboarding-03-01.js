// Find Missing Number
// You are given an unsorted array, and are told that this array contains (n - 1) of n 
// consecutive numbers (where the bounds are defined). Write a method, 
// findMissingNumber, that finds the missing number in O(N) time

[1,2,3,5]
// findMissingNumber(array, upperBound, lowerBound)

// [5,3,4,1] , min, max

// start with an empty set, 
// loop through the given array and we populate the set with elements the array
// then we loop through lower and upper return the number that is not in the set
// o(n) run time 
// o(n) space 

function findMissingNumber(array, upperBound, lowerBound) {
  const tempSet = new Set();
  array.forEach(ele => {
    tempSet.add(ele);
  });
  // console.log(tempSet);
  for (let i = lowerBound; i <= upperBound; i++ ) {
      if (!tempSet.has(i)) return i;
  }
}

// console.log(findMissingNumber([2, 5, 1, 4, 9, 6, 3, 7], 9, 1))

// The magic index of an array occurs when the element at that index is the same 
// as the index itself. More simply, the magic index is when array[i] === i. 
// Write a recursive method, findMagicIndex, that takes in an array and returns 
// the index that is the magic index. The method must take O(logN) time and 
// O(logN) space.

// The array is sorted
// The array may have multiple magic indices. If this is the case, return the leftmost occurance.
// The elements in the array don't have to be distinct
// The magic index doesn't always exist; return -1 if it doesn't exist
// The array may have negative values

// array is sorted, binary search 

// function findMagicIndex(array, start, end)

// brute force: 
// loop through each element of the array and check if index = array[index]
// o(n) time

// optimal solution
// start > end return -1; 
// mid = start + end / 2
// if mid === array[mid], return mid;
// if mid === array[mid] && start === end, return mid;

// if mid > array[mid]
// recursively bsearch right (mid+1, right);
// else recursively bsearch left (left, mid-1);



// function findMagicIndex(array, start, end) {
//   if (end < start || start < 0 || end >= array.length)
//     return -1;

//   const mid = Math.floor((start + end) / 2);

//   if (mid === array[mid])
//     return mid;

//   const leftEnd = Math.min(mid - 1, array[mid]);
//   const leftResult = findMagicIndex(array, start, leftEnd);

//   if (leftResult !== -1)
//     return leftResult;

//   const rightStart = Math.max(mid + 1, array[mid]);
//   const rightResult = findMagicIndex(array, rightStart, end);

//   if (rightResult !== -1)
//     return rightResult;

//   return -1;
// }


function sillySum(digits) {
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === digits[(i + 1) % digits.length])
      sum += parseInt(digits[i]);
  }

  return sum;
}

console.log(sillySum(`1111`))


// console.log(findMagicIndex([-2, 1, 2, 4, 5], 0, 4))

