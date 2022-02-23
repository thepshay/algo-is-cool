// https://leetcode.com/problems/maximum-subarray/

// Naive
// Start with max = first element of array
// Use nested loop to find all possible subarrays
// Record the sum of the subarrays
// Return the max value from the subarray
// o(n^2) time complexity, use nested loop 
// o(n) space complexity

// o(n)
// Set, tempMax = nums[0], globalMax = nums[0]
// Loop through nums array
// Set tempMax = max( nums[i], num[i]+tempMax)
// Set globalMax = max( tempMax, globalMax)
// return globalMax 
// o(n) time complexity
// o(1) space complexity

var maxSubArray = function(nums) {
  let tempMax = nums[0];
  let globalMax = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      (nums[i] > nums[i]+tempMax) ? tempMax = nums[i] : tempMax += nums[i];
      if (tempMax > globalMax) globalMax = tempMax;
  }
  return globalMax;
};