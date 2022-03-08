// xor method

var missingNumber = function(nums) {
  let totalXor = 0;
  for (let i = 0; i < nums.length+1; i++) {
      totalXor ^= i;
  }
  for (let i = 0; i < nums.length; i++) {
      totalXor ^= nums[i];
  }
  return totalXor;
};

// sum method

var missingNumber = function(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length+1; i++) {
      sum += i;
  }
  for (let i = 0; i < nums.length; i++) {
      sum -= nums[i];
  }
  return sum;
};