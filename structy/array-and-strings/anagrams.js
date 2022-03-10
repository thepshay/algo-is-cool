const anagrams = (s1, s2) => {
  // todo
  const count = {};
  for (let char of s1) {
    if (!(char in count)) count[char] = 0;
    count[char] += 1;
  }
  
  for (let char of s2) {
    if (!(char in count)) return false;
    count[char] -=1;
  }
  return Object.values(count).every(val => val === 0)
  
};