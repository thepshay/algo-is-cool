/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let longest = s[0];
  
  for (let i = 0; i < s.length; i++) {
      let [left, right] = [i, i];
      while (left >= 0 && right <= s.length-1 && s[left] === s[right]) {
          const newStr = s.slice(left, right+1);
          if (newStr.length > longest.length) longest = newStr;
          left--; 
          right++;
      }
      let [left2, right2] = [i, i+1];
      while (left2 >= 0 && right2 <= s.length-1 && s[left2] === s[right2]) {
          const newStr = s.slice(left2, right2+1);
          if (newStr.length > longest.length) longest = newStr;
          left2--; 
          right2++;
      }
  }
  return longest;
};