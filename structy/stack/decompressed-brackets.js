const decompressBraces = (s) => {
  // todo
  const stack = [];
  
  for (let char of s) {
    if (char === '}') {
      let pattern = '';
      let patternBlock = '';
      while ( isNaN(stack[stack.length - 1])) {
        pattern = stack.pop() + pattern;
      }
      const times = Number(stack.pop());
      
      for (let i = 0; i < times; i++) {
        patternBlock += pattern;
      }
      
      stack.push(patternBlock)
      
    } else if (char !== '{') {
      stack.push(char)
    }
  }
  
  return stack.join('')
};