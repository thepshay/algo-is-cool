var isValid = function(s) {
  const stack = [];
  const pairs = {')' : '(', '}' :'{', ']' : '['};
  
  for (let c of s) {
      
      if (c in pairs && stack[stack.length-1] === pairs[c]) {
          stack.pop();
      } else {
          stack.push(c)
      }
  }
  return stack.length === 0;
};