const createCombinations = (items, k) => {
  // todo
  if (k === 0) return [[]];
  if (items.length === k) return [items];
  
  const first = items[0];
  const reducedComb = createCombinations(items.slice(1), k-1);
  const reducedArr = createCombinations(items.slice(1), k);
  
  
  const firstHalf = [];
  for (let comb of reducedComb) {
    firstHalf.push([first, ...comb]);
  }
  return [...firstHalf, ...reducedArr]
};