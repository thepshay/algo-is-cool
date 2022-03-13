// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const reverseList = (head) => {
  // todo
  let curr = head; //curr = a
  let prev = null; // rev = null
  while (curr !== null) { 
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
