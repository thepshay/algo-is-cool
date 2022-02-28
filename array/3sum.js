// 3Sum
// https://leetcode.com/problems/3sum/

// Naive 
// Use 3 loops to find all possible triplet of the array
// Store triplets st the triplet adds up to 0
// Use a set to make sure they are unique triplet 
// Return array of triplets
// o(n^3) runtime
// o(m) space, where m is the number of unique triplets

// Optimal
// Result =  []
// Sort nums array
// Loop through the array, 
// If first or not same as previous element ,continue
// Let low = i + 1, high = nums.length -1
// While low < high
// If nums[low] + nums[high] = - nums[i], add triplet to results
// Increment low to next unique
// Decrement high to next unique
// If nums[low] + nums[high] > - nums[i]
// Decrement high
// If nums[low] + nums[high] < - nums[i]
// Increment low
// Return results

var threeSum = function(nums) {
  const res = [];
  nums.sort((a,b) => a > b ? 1 : -1);
  
  for (let i = 0; i < nums.length - 1; i++) {
      if (i === 0 || (i > 0 && nums[i] != nums[i-1])) {
          let low = i+1;
          let high = nums.length - 1;
          let target = -nums[i];
          while (low < high) {
              if (nums[low] + nums[high] === target) {
                  res.push([nums[i], nums[low], nums[high]])
                  while (low < high && nums[low] === nums[low+1]) low++;
                  while (low < high && nums[high] === nums[high-1]) high--;
                  low++;
                  high--;
              } else if (nums[low] + nums[high] > target) {
                  high--;
              } else {
                  low++;
              }
          }
      }
  }
  return res;
};