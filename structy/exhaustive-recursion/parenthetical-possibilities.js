// const parentheticalPossibilities = (s) => {
//   // todo
//   if (s === '') return [''];
  
//   const firstChar = s[0];
//   const charList = [];
//   let nextStr = '';
//   if (firstChar === '(') {
//     let i = 1;
//     while (s[i] !== ')') {
//       charList.push(s[i]);
//       i++;
//     }
//     nextStr = s.slice(i+1);
//   } else {
//     charList.push(firstChar)
//     nextStr = s.slice(1);
//   }
  
//   const prevCombination = parentheticalPossibilities(nextStr);
//   const nextCombination = [];
//   for (let char of charList) {
//     for (let str of prevCombination) {
//       nextCombination.push(char + str);
//     }
//   }
//   return nextCombination;
// };

const parentheticalPossibilities = (s) => {
  if (s === '') return [''];
  
  const { chars, remaining } = getOptions(s);
  const prevCombination = parentheticalPossibilities(remaining);
  const res = [];
  for (let c of chars) {
    for (let comb of prevCombination) {
      res.push(c + comb)
    }
  }
  return res;
  
}

const getOptions = (s) => {
  if (s[0] === '(') {
    const closingIndex = s.indexOf(')');
    const remaining = s.slice(closingIndex + 1);
    const chars = s.slice(1, closingIndex);
    return {chars, remaining};
  } else {
    return {
      chars: s[0],
      remaining: s.slice(1)
    }
  }
}