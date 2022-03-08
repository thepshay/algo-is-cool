var reverseBits = function(n) {
  let res = 0;
  for (i = 0; i < 32; i++) {
      const bit = (n >> i) & 1;
      res |= (bit << (31-i));
  }
  return res>>>0 // change back to positive
};