const substituteSynonyms = (sentence, synonyms) => {
  // todo
  const words = sentence.split(' ')
  const combinations = getCombinations(words, synonyms);
  return combinations.map((comb) => comb.join(' '));
};

const getCombinations = (words, synonyms) => {
  if (words.length === 0) return [[]];
  
  const firstWord = words[0];
  const prevCombination = getCombinations(words.slice(1), synonyms);
  let res = [];
  if (firstWord in synonyms) {
    for (let synonym of synonyms[firstWord]) {
      for (let comb of prevCombination) {
        res.push([synonym, ...comb]);
      }
    }
  } else {
    for (let comb of prevCombination) {
      res.push([firstWord, ...comb])
    }
  }
  return res;
}