// Two Sums
// Loop through each element of the array
// For each element, we loop through each element of the array again
// Check if the sum of the two elements adds up to target value
// If yes, return array of the two index, else continue loop
// O(n^2) time complexity, where n is the length of the array
// O(1) space complexity, we are only storing single variables to check if they add up to target 

// Using hash
// Loop through each element of the array
// For each element, we check if the element is a key in the hash
// If not, we’ll add to a hash
// Key - as the complement, so ( target - current value ) 
// Value - index
// If yes, we have found the index such that the value + curr = target
// Return the array of index
// O(n) time complexity, n is the length of the array
// O(n) space complexity, store the values inside a hash

var twoSum = function(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] === undefined) {
          const complement = target - nums[i];
          hash[complement] = i;
      } else {
          return [hash[nums[i]], i]
      }
  }
}