const uncompress = (s) => {
  // todo
  let newStr = [];
  const numbers = '0123456789';
  let j = 0;
  let i = 0;
  
  while (j < s.length) {
    while (numbers.includes(s[j])) {
      j++;
    }
    const num = parseInt(s.slice(i, j));
    const char = s[j];
    
    for (let i = 0; i < num; i++) {
      newStr.push(char);
    }
    j = j+1;
    i = j;
  }
  return newStr.join('');
};
