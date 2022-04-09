const lexicalOrder = (word1, word2, alphabet) => {
  // todo
  const index = {};
  alphabet.split('').forEach((char, i) => index[char] = i);
  // console.log(index)
//   let w1weight = 0;
//   let w2weight = 0;
//   let i = 0;
//   while (i < word1.length || i < word2.length) {
//     const char1 = word1[i];
//     const char2 = word2[i];
    
//     const weight1 = index[char1] ? index[char1] : 0
//     w1weight += weight1;
//     w1weight *= 100;
    
//     const weight2 = index[char2] ? index[char2] : 0;
//     w2weight += weight2;
//     w2weight *= 100;
//     i++;
//   }
//   console.log(w1weight);
//   console.log(w2weight);
//   return w1weight <= w2weight;
  let i = 0; 
  while ( i < word1.length && i < word2.length) {
    const char1 = word1[i];
    const char2 = word2[i]; 
    
    if (char1 !== char2) {
      if (alphabet.indexOf(char1) > alphabet.indexOf(char2)) {
        return false;
      } else {
        return true;
      }
    }
    i++;
  }
  return word1.length <= word2.length;
};