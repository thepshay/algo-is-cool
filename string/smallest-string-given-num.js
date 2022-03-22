/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getSmallestString = function(n, k) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = new Array(n).fill('a')
  
  k -= n;
  let i = n - 1;
  
  while (k > 25) {
      k -= 25;
      result[i] = alphabet[25];
      i--;
  }
  
  result[i] = alphabet[k];
  return result.join('');
};


// start off with a array length n filled with 'a';
// i = n-1
// while k > 26 
// k -= 26
// add 25 to array[i]
// i--
// once k < 26
// replace array[i-1] with k+1
// construct string with corresponding letters of the alphabet
  
// n = 5, k = 73


// 1 1 1 1 1 = 5
  
// 68 - 25 = 43

// 1 1 1 1 26 = 30 
  
// 42 - 25 = 18
  
// 1 1 1 26 26 = 55
  
// 1 1 19 26 26 = 75 