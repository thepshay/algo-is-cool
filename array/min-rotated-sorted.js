// Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/submissions/

// Naive 
// Let min = arr[0]
// Loop through the array, if curr < min, min = curr
// Return min
// o(n) time complexity
// o(1) space complexity

// o(logn)
// If array is empty return
// If array only has one element return
// Go to the middle index, 
// If both sides are greater than mid, return mid
// If min(first, mid-1) > min(mid+1, last) 
// Return findMin on nums[mid+1 .. -1] 
// Else Return findMin nums[0, mid-1]

var findMin = function(nums) {
  if (nums.length === 0) return;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) {
      return (nums[0] < nums[1]) ? nums[0] : nums[1]
  }
  
  const midIndex = Math.floor(nums.length/2);
  if (nums[midIndex] < nums[midIndex-1] && nums[midIndex] < nums[midIndex+1]) {
      return nums[midIndex];
  }
  if (Math.min(nums[0], nums[midIndex-1]) > Math.min(nums[midIndex+1], nums[nums.length-1])) {
      return findMin(nums.slice(midIndex+1))
  } else {
      return findMin(nums.slice(0, midIndex))
  }
};

// Another (better?) o(logn)
// Use binary search, we want to find the point where there the largest element ends and smallest begins
// Take left = 0, right = nums.length-1
// While left > right ( while unsorted)
// If left > mid , -> left side unsorted, then right = mid
// Else, -> right side unsorted, then left+1 = mid
// Once, while loop is done return nums[mid]
// o(logn) time complexity
// o(1) space complexity

var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  while (nums[left] > nums[right]) {
      const mid = Math.floor((left + right) / 2);
      if ( nums[mid] < nums[left]) {
          right = mid;
      } else {
          left = mid+1;
      }
  }
  return nums[left];
};