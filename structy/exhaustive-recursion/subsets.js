const subsets = (elements) => {
  // todo
  if (elements.length === 0) return [[]];
  
  const first = elements[0];
  const prevSubset = subsets(elements.slice(1));
  const newSubset = [];
  for (let subset of prevSubset) {
    newSubset.push([first, ...subset]);
  }
  return [...prevSubset, ...newSubset];
};