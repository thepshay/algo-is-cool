const tokenTransform = (s, tokens, memo = {}) => {
  // todo
  let i = 0;
  let j = 1;
  const output = [];
  while (i < s.length) {
    if (s[i] !== '$') {
      output.push(s[i]);
      i += 1;
      j += 1;
    } else if (s[j] !== '$') {
      j+=1
    } else {
      const key = s.slice(i, j+1);
      if (memo[key] === undefined) {
        const value = tokenTransform(tokens[key], tokens, memo);
        memo[key] = value;
      }
      output.push(memo[key]);
      i = j+1;
      j = i+1;
    }
  }
  return output.join('')

};