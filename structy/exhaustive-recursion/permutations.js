const permutations = (items) => {
  // todo
  
  if (items.length === 0) return [[]];
  // if (items.length === 1) return [items]
  
  const first = items[0];
  const prevPerm = permutations(items.slice(1));
  const newPerm = [];
  
  for (let perm of prevPerm) {
    for (let i = 0; i <= perm.length; i++) {
      const firstHalf = perm.slice(0, i);
      const secondHalf = perm.slice(i);
      newPerm.push([...firstHalf, first, ...secondHalf]);
    }
  }
  return newPerm;
};