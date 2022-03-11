const intersection = (a, b) => {
  // todo
  const tracker = new Set()
  let counter = [];
  a.forEach(ele => {
    tracker.add(ele);
  });
  
  b.forEach(ele => {
    if (tracker.has(ele)) counter.push(ele);
  })
  return counter;
};