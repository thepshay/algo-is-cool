const detectDictionary = (dictionary, alphabet) => {
  // todo
  for (let i = 0; i < dictionary.length-1; i++) {
    if (!isAlphabetical(dictionary[i], dictionary[i+1], alphabet)) return false;
  }
  return true;
};

const isAlphabetical = (word1, word2, alphabet) => {
  let i = 0;
  while (i < word1.length || i < word2.length) {
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
}