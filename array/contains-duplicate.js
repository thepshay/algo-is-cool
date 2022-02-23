// https://leetcode.com/problems/contains-duplicate/

// Naive Solution
// For each element loop through the array again, and check if there is duplicate value
// If yes return true, else continue
// If we reach the end without returning true, return false
// o(n^2) time complexity, n length of array
// o(1) space complexity

// o(n) solution
// Start with empty hash 
// Iterate through the array, check if ele is a key, if yes return true, if not continue 
// Return false at end of array
// o(n) time complexity
// o(n) space complexity

var containsDuplicate = function(nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]]) {
          return true;
      } else {
          hash[nums[i]] = true;
      }
  }
  return false;
};

// solution using sets
var containsDuplicate = function(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i])
    }
    return false;
};