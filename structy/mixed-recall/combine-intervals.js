const combineIntervals = (intervals) => {
  // todo
//   const sortedInterval = intervals.sort((a,b) => a[0] - b[0]);
//   // console.log(sortedInterval);
//   const res = [sortedInterval[0]];
//   for (let i = 1; i < sortedInterval.length; i++) {
//     const prevInterval = res[res.length - 1];
//     const currInterval = sortedInterval[i]
//     if (prevInterval[1] >= currInterval[0] && prevInterval[1] < currInterval[1]) {
//       res[res.length - 1] = sortedInterval[i][1];
//     } else if (prevInterval[1] < currInterval[1]){
//       res.push(sortedInterval[i]);
//     }
    
//   }
//   return res;
  
  const sortedInterval = intervals.sort((a,b) => a[0] - b[0]);
  
  const res = [sortedInterval[0]];
  for (let currInterval of sortedInterval.slice(1)) {
    const prevInterval = res[res.length - 1];
    const [ prevStart, prevEnd ] = prevInterval;
    const [ currentStart, currentEnd ] = currInterval;
    if (currentStart <= prevEnd) {
      if (currentEnd > prevEnd) {
        prevInterval[1] = currentEnd;
      }
    } else {
      res.push(currInterval);
    }
  }
  return res;
};