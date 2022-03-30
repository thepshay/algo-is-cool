const befittingBrackets = (str) => {
  // todo
  let stack = [];
  for (let char of str) {
    if (char === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else if (char === '}' && stack[stack.length - 1] === '{') {
      stack.pop();
    } else if (char === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};