// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedPalindrome = (head) => {
  // todo
  const array = [];
  
  while (head !== null) {
    array.push(head.val);
    head = head.next;
  }
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] != array[array.length - 1 - i]) {
      return false;
    }
  }
  return true;
};