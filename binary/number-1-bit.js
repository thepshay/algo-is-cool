var hammingWeight = function(n) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
      count += n % 2;
      n >>= 1;
  }
  return count
};