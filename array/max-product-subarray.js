// Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/

// Naive 
// Start with max = nums[0]
// Use nested loops to find all subarrays 
// Multiply each element of the subarray 
// Replace max if there is a large product
// Return max
// o(n^2) time complexity
// o(n) space complexity 

// o(n)
// Start with tempMax, tempMin, globalMax = nums[0]
// Loop through each element of the array
// Let tempMax = max(curr, curr * tempMax, curr * tempMin)
// Let tempMin = min(curr, curr * tempMax, curr * tempMin)
// Let globalMax = max(tempMax, globalMax)
// Return globalMax
// o(n) time complexity
// o(1) space complexity

var maxProduct = function(nums) {
  let tempMax = nums[0];
  let tempMin = nums[0];
  let globalMax = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      const curr = nums[i];
      const maxProduct = curr * tempMax;
      const minProduct = curr * tempMin;
      tempMax = Math.max(curr, maxProduct, minProduct);
      tempMin = Math.min(curr, maxProduct, minProduct);
      globalMax = Math.max(globalMax, tempMax);
      
  }
  return globalMax;
};