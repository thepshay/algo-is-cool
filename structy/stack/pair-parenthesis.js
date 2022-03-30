// const pairedParentheses = (str) => {
//   // todo
//   const stack = [];
  
//   for (let c of str) {
//     if (c === ')' && stack[stack.length - 1] === '(') {
//       stack.pop();
//     } else if (c === '(' || c === ')') {
//       stack.push(c);
//     }
//     console.log(stack)
//   }
//   return stack.length === 0;
// };

const pairedParentheses = (str) => {
  let count = 0;
  for (let char of str) {
    if (char === '(') {
      count++;
    } else if (char === ')') {
      if (count === 0) return false;
      count--;
    }
  }
  return count === 0;
}
