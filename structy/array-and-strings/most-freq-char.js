const mostFrequentChar = (s) => {
  // todo
  const count = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!(char in count)) count[char] = 0;
    count[char] += 1;
  }
  let max = 0;
  let maxChar = '';
  Object.keys(count).forEach(key => {
    if (count[key] > max) {
      max = count[key];
      maxChar = key;
    }
  })
  return maxChar;
};
