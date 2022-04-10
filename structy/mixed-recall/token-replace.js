// const tokenReplace = (s, tokens) => {
//   // todo
//   // const splitStr = s.split('$');
//   // const newWord = []
//   // console.log(splitStr)
//   // for (let word of splitStr) {
//   //   if (tokens[`$${word}$`] !== undefined) {
//   //     newWord.push(tokens[`$${word}$`]);
//   //   } else {
//   //     newWord.push(word);
//   //   }
//   // }
//   // return newWord.join('')
//   const newStr = [];
//   let i = 0;
//   while (i < s.length) {
//     let tempStr = ''
//     if (s[i] === '$') {
//       tempStr += s[i];
//       i++;
//       while (s[i] !== '$') {
//         tempStr += s[i];
//         i++;
//       }
//       tempStr += '$'
//       newStr.push(tokens[tempStr]);
//     } else {
//       newStr.push(s[i]);
//     }
//     i++;
//   }
//   return newStr.join('');
// };

const tokenReplace = (s, token) => {
  let output = [];
  
  let i = 0;
  let j = 1;
  
  while (i < s.length) {
    if (s[i] !== '$') {
      output.push(s[i]);
      j+=1;
      i+=1;
    } else if (s[j] !== '$') {
      j+=1;
    } else {
      const key = s.slice(i, j+1);
      output.push(token[key]);
      i = j+1;
      j = i+1;
    }
  }
  return output.join('')
}