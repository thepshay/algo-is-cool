const tribonacci = (n, memo = {}) => {
  // todo
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 0;
  if (n === 2) return 1;
  
  memo[n] = tribonacci(n-1, memo) + tribonacci(n-2, memo) + tribonacci(n-3, memo);
  return memo[n];
};


