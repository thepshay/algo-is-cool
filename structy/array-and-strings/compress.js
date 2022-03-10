const compress = (s) => {
  // todo
  let res = [];
  let i = 0;
  
  while (i < s.length) {
    let count = 0;
    const currChar = s[i];
    while (currChar === s[i]) {
      i++;
      count++;
    }
    if (count === 1) {
      res.push(currChar);
    } else {
      res.push(count+currChar)      
    }
  }
  return res.join('')
};
