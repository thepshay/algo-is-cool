// Container With Most Water

// Brute Force
// Use two loops to find all possible pairs of height
// Record the area from the pair 
// Return the greatest area
// o(n^2) time complexity
// o(1) space complexity

// Optimal 
// Start with left=0, right=height.length-1, maxArea = 0
// While left < right
// Check area of height[l] and height[r]
// If greater than maxArea, replace maxArea
// Move smaller value closer to center, (if h[l] > h[r] r --, else l ++)
// Return max height after while loop
// o(n) run time
// o(1) space 

var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
      const currArea = (right - left) * Math.min(height[left],  height[right]);
      if (currArea > max) max = currArea;
      if (height[left] > height[right]) {
          right--;
      } else {
          left++;
      }
  }
  return max;
};