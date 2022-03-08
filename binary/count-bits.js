var countBits = function(n) {
  const res = new Array(n+1).fill(0);
  let offset = 1;
  for (let i = 1; i < n+1; i++) {
      if (i === offset*2) {
          offset = i;
      }
      res[i] = 1 + res[i - offset];
  }
  return res;
};