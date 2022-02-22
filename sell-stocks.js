// Naive solution
// Start with max profit = 0
// For each element of the array, loop through elements again
// If inner - outer > max profit, max profit = inner - out
// Return max profit once finish outer loop
// o(n^2) time complexity
// o(1) space complexity

// o(n) soln
// Start with variable, profit = 0, min = array[0];
// Loop through the array, curr - min, if curr - min > profit, profit = curr-min
// If curr < min, replace min = curr
// Return profit after loop ends
// o(n) time complexity
// o(1) space complexity

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
  let profit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
      const curr = prices[i];
      if (curr < min) {
          min = curr
      }
      if (curr - min > profit) {
          profit = curr-min
      }
  }
  return profit;
};