// https://leetcode.com/problems/product-of-array-except-self/submissions/

// Naive Solution
// For loop, inner loop that multiplies each element except the ith element,
// Add result to array
// Return array
// o(n^2) time complexity
// o(n) space complexity 

// o(n) solution 
// preArr, postArr = []
// Set pre,post = 1
// Loop through nums array, push pre into preArr
// Multiply pre by curr nums element
// Loop through nums array backwards, multiply post with postArr[i]
// Multiply post by curr nums element
// Multiply each element of preArr and postArr at element i.
// Return result
// o(n) time complexity
// o(n) extra space complexity

var productExceptSelf = function(nums) {
  let preArr = [];
  let postArr = [];
  let res = [];
  let pre = 1;
  let post = 1;
  
  for (let i = 0; i < nums.length; i++) {
      preArr.push(pre);
      pre *= nums[i]
  }
  
  for (let i = nums.length-1; i >= 0; i--) {
      postArr.unshift(post);
      post *= nums[i];
  }
  
  for (let i = 0; i < nums.length; i++) {
      const val = preArr[i] * postArr[i];
      res.push(val);
  }
  
  return res;
};

// much better run time, pre filled array rather than using push
var productExceptSelf = function(nums) {
  let preArr = new Array(nums.length).fill(1)
  let postArr = new Array(nums.length).fill(1);
  let res = new Array(nums.length).fill(1);
  let pre = 1;
  let post = 1;
  
  for (let i = 0; i < nums.length; i++) {
      preArr[i] = pre;
      pre *= nums[i]
  }
  
  for (let i = nums.length-1; i >= 0; i--) {
      postArr[i] = post;
      post *= nums[i];
  }
  
  for (let i = 0; i < nums.length; i++) {
      res[i] = preArr[i] * postArr[i];
  }
  
  return res;
};

// better o(n) solution
// Start with result arr length nums.length, prefilled with 1;
// Set pre, post = 1
// Loop through nums and set res[i] to pre
// Multiply pre with curr arr
// Loop through nums backwards, multiply res[i] with post
// Multiply post with curr arr
// Return res
// o(n) time complexity
// o(1) extra space complexity

var productExceptSelf = function(nums) {
  let res = new Array(nums.length).fill(1);
  let pre = 1;
  let post = 1;
  
  for (let i = 0; i < nums.length; i++) {
      res[i] = pre;
      pre *= nums[i];
  }
  
  for (let i = nums.length-1; i >= 0; i--) {
      res[i] *= post;
      post *= nums[i]
  }

  return res;
};