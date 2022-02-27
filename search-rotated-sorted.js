// Search in Rotated Sorted Array 
// https://leetcode.com/problems/search-in-rotated-sorted-array/

// Naive 
// Loop through the array,
// If we find an element that matches the target, return index
// Else return -1
// o(n) time complex
// o(1) space complex 

// o(logn)
// let l,r  = 0, nums.length -1
// While l < r
// Let mid = l + r / 2
// Return mid if nums[mid] = target
// If nums[l] < nums[r] we know left side is sorted, 
// Check if target is between left values, if yes search left, else search right
// If left side is not sorted, right is sorted
// If target is between right values, if yes search right, else search left.
// Adjust l,r according, depending on if we want to search left or right
// Return -1 if no values found
// o(logn) time complexity
// o(1) space complexity

var search = function(nums, target) {
  let [left, right] = [0, nums.length-1];
  
  while (left <= right) {
      const mid = Math.floor((left+right) / 2);
      if (nums[mid] === target) return mid;
      
      if (nums[left] <= nums[mid]) { //left sorted
          
          if (target > nums[mid] || target < nums[left]) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
          
      } else { //right sorted
          if (target < nums[mid] || target > nums[right]) {
              right = mid-1;
          } else {
              left = mid+1;
          }
      }
  }
  return -1;
};